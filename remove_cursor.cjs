const fs = require('fs');
const path = require('path');

const files = ['src/Home.jsx', 'src/About.jsx', 'src/Work.jsx', 'src/Join.jsx'];

files.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    content = content.replace(/cursor-none/g, '');
    content = content.replace(/<div className="custom-cursor hidden md:block" id="cursor"><\/div>/g, '');
    content = content.replace(/<div className="custom-cursor-follower hidden md:block" id="cursor-follower"><\/div>/g, '');
    fs.writeFileSync(filePath, content);
  }
});
