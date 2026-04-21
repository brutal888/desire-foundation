const fs = require('fs');
const path = require('path');

const files = ['src/Home.jsx', 'src/About.jsx', 'src/Work.jsx', 'src/Join.jsx'];

files.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Navbar Logo Link
    content = content.replace(
      /<div className="flex items-center gap-3">/g,
      `<a href="/" className="flex items-center gap-3">`
    ).replace(
      /<div className="font-serif italic text-2xl text-emerald-950 dark:text-stone-50">Desire Foundation<\/div><\/div>/g,
      `<div className="font-serif italic text-2xl text-emerald-950 dark:text-stone-50">Desire Foundation</div></a>`
    );

    // Footer Logo Link
    content = content.replace(
      /<div className="flex items-center gap-4 mb-8">/g,
      `<a href="/" className="flex items-center gap-4 mb-8">`
    ).replace(
      /<div className="font-serif text-3xl text-emerald-900 dark:text-emerald-100">Desire Foundation<\/div><\/div>/g,
      `<div className="font-serif text-3xl text-emerald-900 dark:text-emerald-100">Desire Foundation</div></a>`
    );

    // Nav Links
    content = content.replace(/href="\/#">Our Story/g, 'href="/about">Our Story');
    content = content.replace(/href="\/#">Impact/g, 'href="/about">Impact');
    content = content.replace(/href="\/#">Projects/g, 'href="/projects">Projects');
    content = content.replace(/href="\/#">Join Us/g, 'href="/join">Join Us');
    
    // Footer Links
    content = content.replace(/href="\/#">About/g, 'href="/about">About');
    content = content.replace(/href="\/#">Careers/g, 'href="/join">Careers');
    content = content.replace(/href="\/#">Contact/g, 'href="/join">Contact');
    
    // Button Links (Convert button text to links where applicable, or wrap in link)
    // For simplicity, we just wrap specific text
    content = content.replace(
        /<button className="([^"]*)">([\s]*)(Partner With Us|Join the Movement|Inquire for Partnership)([\s]*)<\/button>/g,
        `<a href="/join"><button className="$1">$2$3$4</button></a>`
    );

    content = content.replace(
        /<button className="([^"]*)">([\s]*)<span([^>]*)><\/span>([\s]*)Inquire for Partnership([\s]*)<\/button>/g,
        `<a href="/join"><button className="$1">$2<span$3></span>$4Inquire for Partnership$5</button></a>`
    );

    fs.writeFileSync(filePath, content);
  }
});

console.log('Links fixed.');
