/**
 * OG 이미지 생성 스크립트
 * sharp를 사용하여 1200x630 OG 이미지를 생성합니다.
 * 실행: node scripts/generate-og.mjs
 */
import sharp from 'sharp';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outputDir = join(__dirname, '..', 'public');

// Dark Blue 기반 OG 이미지 생성
async function generateOGImage() {
  const width = 1200;
  const height = 630;

  // SVG 기반 이미지 생성 (sharp에서 SVG overlay 가능)
  const svgContent = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#0F172A"/>
          <stop offset="50%" style="stop-color:#1E3A5F"/>
          <stop offset="100%" style="stop-color:#2563EB"/>
        </linearGradient>
        <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:#60A5FA"/>
          <stop offset="100%" style="stop-color:#34D399"/>
        </linearGradient>
      </defs>

      <!-- Background -->
      <rect width="${width}" height="${height}" fill="url(#bg)"/>

      <!-- Dot pattern -->
      <pattern id="dots" width="30" height="30" patternUnits="userSpaceOnUse">
        <circle cx="15" cy="15" r="1" fill="rgba(255,255,255,0.08)"/>
      </pattern>
      <rect width="${width}" height="${height}" fill="url(#dots)"/>

      <!-- Decorative circles -->
      <circle cx="1000" cy="100" r="200" fill="rgba(37,99,235,0.2)" />
      <circle cx="200" cy="500" r="150" fill="rgba(8,145,178,0.15)" />
      <circle cx="1100" cy="500" r="100" fill="rgba(79,70,229,0.2)" />

      <!-- Top line accent -->
      <rect x="0" y="0" width="${width}" height="4" fill="url(#accent)"/>

      <!-- Brand -->
      <text x="80" y="100" font-family="Arial, sans-serif" font-size="24" font-weight="bold" fill="rgba(255,255,255,0.7)">DreamIT Biz</text>

      <!-- Main Title -->
      <text x="80" y="260" font-family="Arial, sans-serif" font-size="72" font-weight="bold" fill="#FFFFFF">AX &amp; DX</text>
      <text x="80" y="350" font-family="Arial, sans-serif" font-size="52" font-weight="bold" fill="url(#accent)">학습 플랫폼</text>

      <!-- Subtitle -->
      <text x="80" y="420" font-family="Arial, sans-serif" font-size="24" fill="rgba(255,255,255,0.8)">AI 전환(AX)과 디지털 전환(DX), 최신 트렌드를 체계적으로 학습</text>

      <!-- Tags -->
      <rect x="80" y="470" width="120" height="36" rx="18" fill="rgba(255,255,255,0.12)"/>
      <text x="112" y="494" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#60A5FA">AI 전환</text>

      <rect x="220" y="470" width="140" height="36" rx="18" fill="rgba(255,255,255,0.12)"/>
      <text x="252" y="494" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#34D399">디지털 전환</text>

      <rect x="380" y="470" width="110" height="36" rx="18" fill="rgba(255,255,255,0.12)"/>
      <text x="404" y="494" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#FBBF24">트렌드</text>

      <rect x="510" y="470" width="100" height="36" rx="18" fill="rgba(255,255,255,0.12)"/>
      <text x="534" y="494" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#F87171">사례</text>

      <!-- URL -->
      <text x="80" y="580" font-family="Arial, sans-serif" font-size="18" fill="rgba(255,255,255,0.5)">ax.dreamitbiz.com</text>

      <!-- Bottom accent line -->
      <rect x="0" y="${height - 4}" width="${width}" height="4" fill="url(#accent)"/>
    </svg>
  `;

  await sharp(Buffer.from(svgContent))
    .png()
    .toFile(join(outputDir, 'og-image.png'));

  console.log('✅ OG image generated: public/og-image.png (1200x630)');
}

generateOGImage().catch(err => {
  console.error('OG image generation failed:', err);
  process.exit(1);
});
