import { spawnSync } from "node:child_process";
// Git Credential Manager realiza a autenticação; nenhum token é salvo neste projeto.
const credential = spawnSync("git", ["credential", "fill"], {
  input: "protocol=https\nhost=github.com\n\n",
  encoding: "utf8",
  env: { ...process.env, GIT_TERMINAL_PROMPT: "0", GCM_INTERACTIVE: "never" },
});
if (credential.status !== 0) {
  console.log("GITHUB_AUTH_UNAVAILABLE");
  process.exit(2);
}
const fields = Object.fromEntries(
  credential.stdout
    .trim()
    .split("\n")
    .map((l) => {
      const i = l.indexOf("=");
      return [l.slice(0, i), l.slice(i + 1)];
    }),
);
if (!fields.password) {
  console.log("GITHUB_AUTH_UNAVAILABLE");
  process.exit(2);
}
const headers = {
  Authorization: `Bearer ${fields.password}`,
  Accept: "application/vnd.github+json",
  "Content-Type": "application/json",
  "User-Agent": "portfolio-publisher",
};
const user = await fetch("https://api.github.com/user", { headers }).then((r) =>
  r.json(),
);
if (user.login !== "Evelin563") {
  console.log("GITHUB_ACCOUNT_MISMATCH");
  process.exit(2);
}
const name = "portfolio-lana-oliveira";
let response = await fetch(
  `https://api.github.com/repos/${user.login}/${name}`,
  { headers },
);
if (response.status === 404)
  response = await fetch("https://api.github.com/user/repos", {
    method: "POST",
    headers,
    body: JSON.stringify({
      name,
      description:
        "Portfólio em React com os projetos da formação Full Stack Java.",
      private: false,
    }),
  });
const repo = await response.json();
if (!response.ok) {
  console.log(`GITHUB_ERROR_${response.status}: ${repo.message}`);
  process.exit(2);
}
console.log(
  JSON.stringify({
    url: repo.html_url,
    clone: repo.clone_url,
    empty: repo.size === 0,
  }),
);
if (process.argv.includes('--pages')) {
  const url = `https://api.github.com/repos/${user.login}/${name}/pages`;
  const existing = await fetch(url, { headers });
  const result = await fetch(url, {
    method: existing.status === 404 ? 'POST' : 'PUT',
    headers,
    body: JSON.stringify({ build_type: 'workflow' }),
  });
  console.log(`PAGES_CONFIG: ${result.status}`);
  if (!result.ok) console.log((await result.json()).message);
}
if (process.argv.includes('--status')) {
  const runs = await fetch(`https://api.github.com/repos/${user.login}/${name}/actions/runs?per_page=1`, { headers }).then(r => r.json());
  console.log(JSON.stringify(runs.workflow_runs?.map(r => ({ status: r.status, conclusion: r.conclusion, url: r.html_url, id: r.id }))));
}
