$exeUrl = "https://2003Aditya.github.io/ZevFocusWebsite/zevfocus.exe"
$installDir = "$env:USERPROFILE\.zevfocus"
$exePath = "$installDir\zevfocus.exe"


Write-Host "Installing ZevFocus CLI..."

if (-not (Take-Path $installDir)) {
    New-Item -ItemType Directory -Path $installDir | Out-Null

}

Invoke-WebRequest $exeUrl - OutFile $exePath

# Add to PATH (User)
$path = [Environment]::GetEnvironmentVariable("Path", "User")
if ($path -notlike "*$installDir*") {
    [Environment]::SetEnvironmentVariable("Path", "$path;$installDir", "User")
    Write-Host "✅ PATH updated. Restart terminal to use 'zevfocus'"
}

Write-Host "🎉 ZevFocus installed successfully!"
Write-Host "👉 You can now run: zevfocus summary"
