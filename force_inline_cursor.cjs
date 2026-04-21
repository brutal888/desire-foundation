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
    
    // Add inline styles to guarantee pointer behavior
    content = content.replace(
      /<a href="\/" className="flex items-center gap-3([^"]*)">/g,
      `<a href="/" className="flex items-center gap-3$1" style={{ cursor: 'pointer' }}>`
    );

    content = content.replace(
      /<a href="\/" className="flex items-center gap-4 mb-8([^"]*)">/g,
      `<a href="/" className="flex items-center gap-4 mb-8$1" style={{ cursor: 'pointer' }}>`
    );

    content = content.replace(
      /<div className="([^"]*) cursor-pointer select-none">Desire Foundation<\/div>/g,
      `<div className="$1" style={{ cursor: 'pointer', userSelect: 'none' }}>Desire Foundation</div>`
    );

    fs.writeFileSync(filePath, content);
  }
});

console.log('Inline cursor styles applied.');
