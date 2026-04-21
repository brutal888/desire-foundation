const fs = require('fs');
const path = require('path');

const files = ['src/Home.jsx', 'src/About.jsx', 'src/Work.jsx', 'src/Join.jsx'];

files.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Navbar replacement
    content = content.replace(
      /<div className="font-serif italic text-2xl text-emerald-950 dark:text-stone-50">Desire Foundation<\/div>/g,
      `<div className="flex items-center gap-3"><img src="/logo.png" alt="Desire Foundation Logo" className="h-10 w-auto" /><div className="font-serif italic text-2xl text-emerald-950 dark:text-stone-50">Desire Foundation</div></div>`
    );

    // Footer replacement
    content = content.replace(
      /<div className="font-serif text-3xl text-emerald-900 dark:text-emerald-100 mb-8">Desire Foundation<\/div>/g,
      `<div className="flex items-center gap-4 mb-8"><img src="/logo.png" alt="Desire Foundation Logo" className="h-12 w-auto" /><div className="font-serif text-3xl text-emerald-900 dark:text-emerald-100">Desire Foundation</div></div>`
    );
    
    fs.writeFileSync(filePath, content);
  }
});

// Also update index.html to use the logo as favicon
const indexPath = path.join(__dirname, 'index.html');
if (fs.existsSync(indexPath)) {
    let indexContent = fs.readFileSync(indexPath, 'utf8');
    indexContent = indexContent.replace(/<link rel="icon" type="image\/svg\+xml" href="\/favicon.svg" \/>/g, '<link rel="icon" type="image/png" href="/logo.png" />');
    fs.writeFileSync(indexPath, indexContent);
}

console.log('Logo tags added.');
