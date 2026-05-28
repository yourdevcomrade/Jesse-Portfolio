# Jesse's Portfolio

## Local development

Install dependencies:

```bash
npm install
```

Run the production build:

```bash
npm run build
```

### PowerShell compatibility

If PowerShell blocks `npm` because of script execution policy, run the build wrapper directly:

```powershell
.\build.ps1
```

Or run Vite directly:

```powershell
node .\node_modules\vite\bin\vite.js build
```

If you want to allow `npm` scripts in PowerShell permanently, you can update the execution policy for your user account:

```powershell
Set-ExecutionPolicy -Scope CurrentUser RemoteSigned
```
