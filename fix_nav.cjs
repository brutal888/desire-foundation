const fs = require('fs');
const path = require('path');

const files = ['src/Home.jsx', 'src/About.jsx', 'src/Work.jsx', 'src/Join.jsx'];

files.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    content = content.replace(/<nav className="fixed top-0 left-0 right-0 z-50([^"]+)"/g, (match, p1) => {
        let classes = p1
            .replace('rounded-full', '')
            .replace('mt-6', '')
            .replace('mx-auto', '')
            .replace('max-w-7xl', '')
            .replace(/\s+/g, ' '); // remove extra spaces
        return `<nav className="sticky top-0 z-50 w-full${classes}"`;
    });

    fs.writeFileSync(filePath, content);
  }
});

console.log('Fixed nav in all files.');
