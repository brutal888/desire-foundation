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
    
    // Add cursor-pointer to the <a> tag wrapping the logo
    content = content.replace(
      /<a href="\/" className="flex items-center gap-3">/g,
      `<a href="/" className="flex items-center gap-3 cursor-pointer">`
    );

    content = content.replace(
      /<a href="\/" className="flex items-center gap-4 mb-8">/g,
      `<a href="/" className="flex items-center gap-4 mb-8 cursor-pointer">`
    );

    // Also add cursor-pointer and select-none to the div just in case the browser tries to be smart about the text
    content = content.replace(
      /<div className="font-serif italic text-2xl text-emerald-950 dark:text-stone-50">Desire Foundation<\/div>/g,
      `<div className="font-serif italic text-2xl text-emerald-950 dark:text-stone-50 cursor-pointer select-none">Desire Foundation</div>`
    );

    content = content.replace(
      /<div className="font-serif text-3xl text-emerald-900 dark:text-emerald-100">Desire Foundation<\/div>/g,
      `<div className="font-serif text-3xl text-emerald-900 dark:text-emerald-100 cursor-pointer select-none">Desire Foundation</div>`
    );

    fs.writeFileSync(filePath, content);
  }
});

console.log('Cursor fixes applied.');
