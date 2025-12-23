# PowerShell script to create placeholder images and test the portfolio
# Run this script from the project root directory

Write-Host "🎯 Portfolio Setup & Build Script" -ForegroundColor Cyan
Write-Host ""

# Create images directory
Write-Host "📁 Creating images directory..." -ForegroundColor Yellow
$imagesPath = "public\images"
if (-not (Test-Path $imagesPath)) {
    New-Item -ItemType Directory -Path $imagesPath -Force | Out-Null
    Write-Host "✓ Created $imagesPath" -ForegroundColor Green
} else {
    Write-Host "✓ $imagesPath already exists" -ForegroundColor Green
}

# Create placeholder images using data URIs
Write-Host ""
Write-Host "🖼️ Creating placeholder SVG images..." -ForegroundColor Yellow

$svgTemplate = @'
<svg width="600" height="400" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#3b82f6;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#a855f7;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="600" height="400" fill="url(#grad)"/>
  <text x="50%" y="50%" font-size="28" fill="white" text-anchor="middle" dominant-baseline="middle" font-family="Arial">
    Placeholder Image
  </text>
</svg>
'@

# Create project images
Write-Host "  Creating project placeholders..." -ForegroundColor Cyan
@("project-1", "project-2", "project-3") | ForEach-Object {
    $filePath = "$imagesPath\$_.svg"
    $svgTemplate | Out-File -Encoding UTF8 $filePath
    Write-Host "  ✓ Created $_" -ForegroundColor Green
}

# Create certification images
Write-Host "  Creating certification placeholders..." -ForegroundColor Cyan
@("cert-istqb", "cert-react", "cert-webdev") | ForEach-Object {
    $filePath = "$imagesPath\$_.svg"
    $svgTemplate | Out-File -Encoding UTF8 $filePath
    Write-Host "  ✓ Created $_" -ForegroundColor Green
}

Write-Host ""
Write-Host "✅ Placeholder images created!" -ForegroundColor Green
Write-Host "   Note: Replace these with your actual project screenshots and certificates"
Write-Host ""

# Build the project
Write-Host "🔨 Building the portfolio..." -ForegroundColor Yellow
Write-Host ""

npm run build

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "✅ Build successful!" -ForegroundColor Green
    Write-Host ""
    Write-Host "📦 Next steps:" -ForegroundColor Cyan
    Write-Host "  1. Run 'npm run dev' to preview locally" -ForegroundColor White
    Write-Host "  2. Update your personal information in src/data/" -ForegroundColor White
    Write-Host "  3. Add your own images to public/images/" -ForegroundColor White
    Write-Host "  4. Configure EmailJS in src/components/sections/Contact.tsx" -ForegroundColor White
    Write-Host "  5. Deploy to Netlify, Vercel, or your preferred platform" -ForegroundColor White
} else {
    Write-Host ""
    Write-Host "❌ Build failed. Check the errors above." -ForegroundColor Red
}
