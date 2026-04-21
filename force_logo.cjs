const fs = require('fs');
const path = require('path');

const files = [
    'src/DesktopHome.jsx', 'src/DesktopAbout.jsx', 'src/DesktopWork.jsx', 'src/DesktopJoin.jsx',
    'src/MobileHome.jsx', 'src/MobileAbout.jsx', 'src/MobileWork.jsx', 'src/MobileJoin.jsx'
];

files.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // First, let's normalize everything back to just the div.
    // This removes any existing <a> and <img> wraps I might have added.
    content = content.replace(
      /<a href="\/"[^>]*>\s*<img src="\/logo\.png"[^>]*>\s*<div className="([^"]*)"[^>]*>\s*Desire Foundation\s*<\/div>\s*<\/a>/g,
      `<div className="$1">Desire Foundation</div>`
    );

    // Some of the classes might have " cursor-pointer select-none" attached to them from the previous run, let's clean it up.
    content = content.replace(/ cursor-pointer select-none/g, '');
    content = content.replace(/ select-none/g, '');

    // Now, let's wrap EVERY occurrence of <div className="...">Desire Foundation</div> 
    // We use [\s\S]*? to handle newlines
    content = content.replace(
      /<div className="([^"]*)">\s*Desire Foundation\s*<\/div>/g,
      `<a href="/" className="flex items-center gap-3 cursor-pointer"><img src="/logo.png" alt="Desire Foundation Logo" className="h-10 w-auto" /><div className="$1 cursor-pointer select-none">Desire Foundation</div></a>`
    );

    fs.writeFileSync(filePath, content);
  }
});

console.log('Logos successfully forced onto every page.');
