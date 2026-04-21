const fs = require('fs');
const path = require('path');

function processHtml(html, isMobile) {
  // Extract body content
  let bodyContent = html.match(/<body[^>]*>([\s\S]*)<\/body>/)[1];
  
  // Basic cleanup
  bodyContent = bodyContent.replace(/class=/g, 'className=');
  bodyContent = bodyContent.replace(/for=/g, 'htmlFor=');
  bodyContent = bodyContent.replace(/viewbox=/g, 'viewBox=');
  bodyContent = bodyContent.replace(/fill-rule=/g, 'fillRule=');
  bodyContent = bodyContent.replace(/clip-rule=/g, 'clipRule=');
  bodyContent = bodyContent.replace(/stroke-width=/g, 'strokeWidth=');
  bodyContent = bodyContent.replace(/stroke-linecap=/g, 'strokeLinecap=');
  bodyContent = bodyContent.replace(/stroke-linejoin=/g, 'strokeLinejoin=');
  bodyContent = bodyContent.replace(/stroke-miterlimit=/g, 'strokeMiterlimit=');
  bodyContent = bodyContent.replace(/onclick=/g, 'onClick=');
  
  // Remove navigation and footer if they are already in the global wrapper
  // But wait, the user wants me to keep everything exactly as it was.
  // Actually, I'll keep the design but swap the brand name and links.
  
  bodyContent = bodyContent.replace(/The Living Archive/g, 'Desire Foundation');
  bodyContent = bodyContent.replace(/Impact/g, 'Media');
  
  // Wrap in a component
  const name = isMobile ? 'MobileMedia' : 'DesktopMedia';
  return `
import React from 'react';
import { useInteractiveElements } from './useInteractiveElements';

export default function ${name}() {
  useInteractiveElements();
  return (
    <div className="bg-background text-on-background font-body selection:bg-primary-fixed selection:text-on-primary-fixed">
      ${bodyContent}
    </div>
  );
}
`;
}

const desktopHtml = fs.readFileSync('desktop_media.html', 'utf8');
const mobileHtml = fs.readFileSync('mobile_media.html', 'utf8');

fs.writeFileSync('src/DesktopMedia.jsx', processHtml(desktopHtml, false));
fs.writeFileSync('src/MobileMedia.jsx', processHtml(mobileHtml, true));

// Create Media.jsx wrapper
const wrapper = `
import React, { useState, useEffect } from 'react';
import DesktopMedia from './DesktopMedia';
import MobileMedia from './MobileMedia';

export default function Media() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile ? <MobileMedia /> : <DesktopMedia />;
}
`;
fs.writeFileSync('src/Media.jsx', wrapper);

// Update App.jsx
let appContent = fs.readFileSync('src/App.jsx', 'utf8');
if (!appContent.includes('Media')) {
    appContent = appContent.replace("import Join from './Join';", "import Join from './Join';\nimport Media from './Media';");
    appContent = appContent.replace('<Route path="/join" element={<Join />} />', '<Route path="/join" element={<Join />} />\n        <Route path="/media" element={<Media />} />');
}
fs.writeFileSync('src/App.jsx', appContent);

// Update navigation in all files
const files = [
    'src/DesktopHome.jsx', 'src/DesktopAbout.jsx', 'src/DesktopWork.jsx', 'src/DesktopJoin.jsx', 'src/DesktopMedia.jsx',
    'src/MobileHome.jsx', 'src/MobileAbout.jsx', 'src/MobileWork.jsx', 'src/MobileJoin.jsx', 'src/MobileMedia.jsx'
];

files.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace "Impact" with "Media" and link to /media
    content = content.replace(/>Impact<\/a>/g, '>Media</a>');
    content = content.replace(/href="\/about"/g, (match, offset, string) => {
        // If it's the "Impact" link, replace it
        const prevPart = string.substring(offset - 20, offset);
        if (prevPart.includes('Media')) {
            return 'href="/media"';
        }
        return match;
    });

    // Special case for the mobile nav where it says "Partners" or "Impact"
    content = content.replace(/>Impact<\/span>/g, '>Media</span>');
    
    fs.writeFileSync(filePath, content);
  }
});

console.log('Media pages integrated and Impact links replaced.');
