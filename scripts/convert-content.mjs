import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const contentDir = join(__dirname, '..', 'app', 'content');

const files = [
  'about-us.ts', 'animation.ts', 'combo-package.ts', 'contact-us.ts',
  'creative-copywriting.ts', 'digital-marketing.ts', 'ecommerce.ts',
  'home.ts', 'illustration.ts', 'logo.ts', 'marketing-collateral.ts',
  'mobile-app.ts', 'order-privacy.ts', 'order-terms.ts', 'portfolio.ts',
  'pricing.ts', 'seo.ts', 'website.ts'
];

function htmlToJsx(html) {
  let result = html;

  // Remove HTML comments
  result = result.replace(/<!--[\s\S]*?-->/g, '');

  // Replace class= with className=
  result = result.replace(/\bclass=/g, 'className=');

  // Self-closing tags: <br> <br > → <br />
  result = result.replace(/<br\s*\/?\s*>/gi, '<br />');
  result = result.replace(/<hr\s*\/?\s*>/gi, '<hr />');

  // <img ...> → <img ... /> (if not already self-closed)
  result = result.replace(/<img\s+([^>]*?)(\s*\/)?\s*>/gi, (match, attrs) => {
    if (match.trim().endsWith('/>')) return match;
    return `<img ${attrs.trim()} />`;
  });

  // <input ...> → <input ... /> (if not already self-closed)
  result = result.replace(/<input\s+([^>]*?)(\s*\/)?\s*>/gi, (match, attrs) => {
    if (match.trim().endsWith('/>')) return match;
    return `<input ${attrs.trim()} />`;
  });

  // Replace style="..." with style={{...}}
  result = result.replace(/style="([^"]*)"/g, (match, styleStr) => {
    const props = styleStr.split(';').filter(s => s.trim());
    const jsxProps = props.map(p => {
      const [key, ...vals] = p.split(':');
      const propKey = key.trim().replace(/-([a-z])/g, (_, c) => c.toUpperCase());
      const propVal = vals.join(':').trim();
      return `${propKey}: '${propVal}'`;
    });
    return `style={{ ${jsxProps.join(', ')} }}`;
  });

  return result;
}

function extractTemplateString(filePath) {
  const content = readFileSync(filePath, 'utf-8');
  const match = content.match(/^export\s+const\s+content\s*=\s*`([\s\S]*)`;\s*$/);
  if (!match) {
    throw new Error(`Could not extract template from ${filePath}`);
  }
  return match[1];
}

function getComponentName(filename) {
  const base = filename.replace('.ts', '');
  return base
    .split('-')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join('');
}

function getComponentFilename(filename) {
  return filename.replace('.ts', '.tsx');
}

for (const file of files) {
  const filePath = join(contentDir, file);
  const html = extractTemplateString(filePath);
  const jsx = htmlToJsx(html);

  const componentName = getComponentName(file);
  const outFile = join(contentDir, getComponentFilename(file));

  // Fix image paths: images/ → /images/
  const fixedJsx = jsx.replace(/src="images\//g, 'src="/images/');

  // Fix href paths: href="page.html" → href="/page"
  const hrefFixed = fixedJsx.replace(/href="([^"]*)\.html"/g, (_, p1) => {
    if (p1 === 'index') return 'href="/"';
    return `href="/${p1}"`;
  });

  // Fix href="Javascript:;" → href="javascript:void(0)"
  const finalJsx = hrefFixed.replace(/href="Javascript:;"/g, 'href="javascript:void(0)"');

  const output = `export default function ${componentName}Content() {
  return (
    <>
${finalJsx.split('\n').map(line => '      ' + line).join('\n')}
    </>
  );
}
`;

  writeFileSync(outFile, output, 'utf-8');
  console.log(`✓ Converted ${file} → ${getComponentFilename(file)}`);
}

console.log('\nDone! All files converted.');
