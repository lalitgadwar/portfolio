# GitHub Portfolio Setup Script
# Run this script to initialize git and prepare for GitHub

Write-Host "🚀 GitHub Portfolio Setup" -ForegroundColor Cyan
Write-Host ""

# Check if git is installed
try {
    $gitVersion = git --version
    Write-Host "✓ Git is installed: $gitVersion" -ForegroundColor Green
} catch {
    Write-Host "✗ Git is not installed. Please install Git first." -ForegroundColor Red
    exit 1
}

# Check if we're already in a git repository
if (Test-Path ".git") {
    Write-Host "⚠ Git repository already initialized" -ForegroundColor Yellow
    $continue = Read-Host "Continue anyway? (y/n)"
    if ($continue -ne "y") {
        exit 0
    }
} else {
    Write-Host "Initializing git repository..." -ForegroundColor Cyan
    git init
    Write-Host "✓ Git repository initialized" -ForegroundColor Green
}

# Get GitHub username
Write-Host ""
$githubUsername = Read-Host "Enter your GitHub username"
$repoName = Read-Host "Enter repository name (default: portfolio)"

if ([string]::IsNullOrWhiteSpace($repoName)) {
    $repoName = "portfolio"
}

# Check if remote already exists
$remoteExists = git remote get-url origin 2>$null
if ($LASTEXITCODE -eq 0) {
    Write-Host "⚠ Remote 'origin' already exists" -ForegroundColor Yellow
    $updateRemote = Read-Host "Update remote URL? (y/n)"
    if ($updateRemote -eq "y") {
        git remote set-url origin "https://github.com/$githubUsername/$repoName.git"
        Write-Host "✓ Remote URL updated" -ForegroundColor Green
    }
} else {
    git remote add origin "https://github.com/$githubUsername/$repoName.git"
    Write-Host "✓ Remote 'origin' added" -ForegroundColor Green
}

# Update vite.config.ts base path
Write-Host ""
Write-Host "Updating vite.config.ts base path..." -ForegroundColor Cyan
$viteConfig = Get-Content "vite.config.ts" -Raw
if ($viteConfig -notmatch "base.*portfolio") {
    $viteConfig = $viteConfig -replace "base: process\.env\.NODE_ENV === 'production' \? '/portfolio/' : '/',", "base: process.env.NODE_ENV === 'production' ? '/$repoName/' : '/',"
    Set-Content "vite.config.ts" -Value $viteConfig -NoNewline
    Write-Host "✓ vite.config.ts updated" -ForegroundColor Green
}

# Update package.json homepage (if exists)
$packageJson = Get-Content "package.json" -Raw | ConvertFrom-Json
if (-not $packageJson.homepage) {
    $packageJson | Add-Member -MemberType NoteProperty -Name "homepage" -Value "https://$githubUsername.github.io/$repoName" -Force
    $packageJson | ConvertTo-Json -Depth 10 | Set-Content "package.json"
    Write-Host "✓ package.json homepage updated" -ForegroundColor Green
}

# Stage all files
Write-Host ""
Write-Host "Staging files..." -ForegroundColor Cyan
git add .
Write-Host "✓ Files staged" -ForegroundColor Green

# Check if there are changes to commit
$status = git status --porcelain
if ($status) {
    $commitMessage = Read-Host "Enter commit message (default: Initial commit: Portfolio website)"
    if ([string]::IsNullOrWhiteSpace($commitMessage)) {
        $commitMessage = "Initial commit: Portfolio website"
    }
    git commit -m $commitMessage
    Write-Host "✓ Changes committed" -ForegroundColor Green
} else {
    Write-Host "⚠ No changes to commit" -ForegroundColor Yellow
}

# Set branch to main
git branch -M main 2>$null

Write-Host ""
Write-Host "✅ Setup complete!" -ForegroundColor Green
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Cyan
Write-Host "1. Create repository on GitHub: https://github.com/new" -ForegroundColor White
Write-Host "   - Name: $repoName" -ForegroundColor White
Write-Host "   - Set to Public" -ForegroundColor White
Write-Host "   - DO NOT initialize with README" -ForegroundColor White
Write-Host ""
Write-Host "2. Push your code:" -ForegroundColor Cyan
Write-Host "   git push -u origin main" -ForegroundColor White
Write-Host ""
Write-Host "3. Enable GitHub Pages:" -ForegroundColor Cyan
Write-Host "   - Go to repository Settings → Pages" -ForegroundColor White
Write-Host "   - Source: GitHub Actions" -ForegroundColor White
Write-Host ""
Write-Host "Your portfolio will be available at:" -ForegroundColor Cyan
Write-Host "https://$githubUsername.github.io/$repoName" -ForegroundColor Yellow
Write-Host ""
