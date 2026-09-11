const STORAGE_KEY = 'diario-de-bordo-entries';
const form = document.querySelector('#entry-form');
const list = document.querySelector('#entries-list');
const count = document.querySelector('#entry-count');
const dateInput = document.querySelector('#date');
const installButton = document.querySelector('#install-button');

let deferredInstallPrompt;

dateInput.value = new Date().toISOString().slice(0, 10);

function getEntries() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || []; }
  catch { return []; }
}

function saveEntries(entries) { localStorage.setItem(STORAGE_KEY, JSON.stringify(entries)); }

function formatDate(value) {
  return new Intl.DateTimeFormat('pt-BR', { dateStyle: 'long' }).format(new Date(`${value}T12:00:00`));
}

function renderEntries() {
  const entries = getEntries().sort((a, b) => b.date.localeCompare(a.date) || b.createdAt - a.createdAt);
  list.replaceChildren();
  count.textContent = entries.length === 1 ? '1 registro' : `${entries.length} registros`;
  if (!entries.length) { list.append(document.querySelector('#empty-state-template').content.cloneNode(true)); return; }
  entries.forEach((entry) => {
    const article = document.createElement('article'); article.className = 'entry';
    const date = document.createElement('div'); date.className = 'entry-date'; date.textContent = formatDate(entry.date);
    const title = document.createElement('h3'); title.textContent = entry.title;
    const description = document.createElement('p'); description.textContent = entry.description;
    const remove = document.createElement('button'); remove.className = 'delete-button'; remove.type = 'button'; remove.title = 'Remover entrada'; remove.setAttribute('aria-label', `Remover ${entry.title}`); remove.textContent = '×';
    remove.addEventListener('click', () => { if (confirm('Remover esta entrada do diário?')) { saveEntries(getEntries().filter((item) => item.id !== entry.id)); renderEntries(); } });
    article.append(date, title, description, remove); list.append(article);
  });
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const entries = getEntries();
  entries.push({ id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()), title: data.get('title').trim(), description: data.get('description').trim(), date: data.get('date'), createdAt: Date.now() });
  saveEntries(entries); form.reset(); dateInput.value = new Date().toISOString().slice(0, 10); renderEntries(); document.querySelector('#title').focus();
});

window.addEventListener('beforeinstallprompt', (event) => { event.preventDefault(); deferredInstallPrompt = event; installButton.hidden = false; });
installButton.addEventListener('click', async () => { if (!deferredInstallPrompt) return; deferredInstallPrompt.prompt(); await deferredInstallPrompt.userChoice; deferredInstallPrompt = null; installButton.hidden = true; });
window.addEventListener('appinstalled', () => { deferredInstallPrompt = null; installButton.hidden = true; });

if ('serviceWorker' in navigator) window.addEventListener('load', () => navigator.serviceWorker.register('service-worker.js'));
renderEntries();
