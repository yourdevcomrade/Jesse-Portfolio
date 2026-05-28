$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Definition
$vitePath = Join-Path $scriptDir "node_modules\vite\bin\vite.js"
node "$vitePath" build
