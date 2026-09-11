$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.IO.Compression.FileSystem
$findings = @()
$entryCount = 0
$textCount = 0
$patterns = @{
  'private-key' = '-----BEGIN (RSA |EC |OPENSSH )?PRIVATE KEY-----'
  'github-token' = '(gh[pousr]_[A-Za-z0-9]{20,}|github_pat_[A-Za-z0-9_]{20,})'
  'api-secret' = '(sk-(proj-)?[A-Za-z0-9_-]{24,}|AKIA[A-Z0-9]{16})'
  'crudcrud-endpoint' = 'crudcrud\.com/api/[a-f0-9]{20,}'
  'credential-literal' = '(?i)(password|senha|secret|api_key|access_token)\s*[:=]\s*["''][^"'']{8,}["'']'
}
foreach ($file in Get-ChildItem -LiteralPath 'public/sources' -Filter '*.zip') {
  $zip = [IO.Compression.ZipFile]::OpenRead($file.FullName)
  try {
    foreach ($entry in $zip.Entries) {
      $entryCount++
      if ($entry.FullName -match '(^|/)(node_modules|\.git|\.next)/|(^|/)\.env($|\.(?!example))') {
        $findings += "$($file.Name): arquivo excluível $($entry.FullName)"
      }
      if ($entry.FullName -match '\.(html|js|jsx|ts|tsx|json|md|yml|yaml|txt|example)$') {
        $textCount++
        $reader = [IO.StreamReader]::new($entry.Open())
        try { $content = $reader.ReadToEnd() } finally { $reader.Dispose() }
        foreach ($pattern in $patterns.GetEnumerator()) {
          if ($content -match $pattern.Value) { $findings += "$($file.Name): $($entry.FullName) [$($pattern.Key)]" }
        }
      }
    }
  } finally { $zip.Dispose() }
}
$report = [ordered]@{ archives = (Get-ChildItem 'public/sources' -Filter '*.zip').Count; entries = $entryCount; textFilesChecked = $textCount; findings = $findings }
$report | ConvertTo-Json -Depth 5 | Set-Content 'artifacts/source-audit.json'
$report | ConvertTo-Json -Depth 5
if ($findings.Count -gt 0) { exit 1 }
