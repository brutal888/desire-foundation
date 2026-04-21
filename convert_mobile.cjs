const fs = require('fs');
const path = require('path');

const filesToProcess = [
    { in: 'mobile_home.html', out: 'src/MobileHome.jsx', name: 'MobileHome' },
    { in: 'mobile_about.html', out: 'src/MobileAbout.jsx', name: 'MobileAbout' },
    { in: 'mobile_work.html', out: 'src/MobileWork.jsx', name: 'MobileWork' },
    { in: 'mobile_join.html', out: 'src/MobileJoin.jsx', name: 'MobileJoin' }
];

filesToProcess.forEach(file => {
    let html = fs.readFileSync(path.join(__dirname, file.in), 'utf8');

    // Extract body contents
    const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    let jsx = bodyMatch ? bodyMatch[1] : html;

    // Convert to JSX
    jsx = jsx.replace(/class=/g, 'className=');
    jsx = jsx.replace(/<!--([\s\S]*?)-->/g, '{/* $1 */}');
    jsx = jsx.replace(/<img([^>]*)>/g, (match) => {
        if (!match.endsWith('/>')) return match.replace(/>$/, ' />');
        return match;
    });
    jsx = jsx.replace(/<input([^>]*)>/g, (match) => {
        if (!match.endsWith('/>')) return match.replace(/>$/, ' />');
        return match;
    });
    jsx = jsx.replace(/<br>/g, '<br />');

    // Replace brand name
    jsx = jsx.replace(/The Living Archive/g, 'Desire Foundation');
    jsx = jsx.replace(/THE LIVING ARCHIVE/g, 'DESIRE FOUNDATION');

    // Remove cursor classes and elements
    jsx = jsx.replace(/cursor-none/g, '');
    jsx = jsx.replace(/<div className="custom-cursor hidden md:block" id="cursor"><\/div>/g, '');
    jsx = jsx.replace(/<div className="custom-cursor-follower hidden md:block" id="cursor-follower"><\/div>/g, '');

    // Nav and Logo fixes
    jsx = jsx.replace(
        /<nav className="fixed top-0 left-0 right-0 z-50([^"]+)"/g, 
        '<nav className="sticky top-0 z-50 w-full$1"'
    );
    jsx = jsx.replace(/rounded-full mt-6 mx-auto max-w-7xl /g, '');

    jsx = jsx.replace(
        /<div className="font-serif italic text-2xl text-emerald-950 dark:text-stone-50">Desire Foundation<\/div>/g,
        `<a href="/" className="flex items-center gap-3"><img src="/logo.png" alt="Desire Foundation Logo" className="h-10 w-auto" /><div className="font-serif italic text-2xl text-emerald-950 dark:text-stone-50">Desire Foundation</div></a>`
    );

    jsx = jsx.replace(
        /<div className="font-serif text-3xl text-emerald-900 dark:text-emerald-100 mb-8">Desire Foundation<\/div>/g,
        `<a href="/" className="flex items-center gap-4 mb-8"><img src="/logo.png" alt="Desire Foundation Logo" className="h-12 w-auto" /><div className="font-serif text-3xl text-emerald-900 dark:text-emerald-100">Desire Foundation</div></a>`
    );

    // Links fixes
    jsx = jsx.replace(/href="\/#">Our Story/g, 'href="/about">Our Story');
    jsx = jsx.replace(/href="\/#">Impact/g, 'href="/about">Impact');
    jsx = jsx.replace(/href="\/#">Projects/g, 'href="/projects">Projects');
    jsx = jsx.replace(/href="\/#">Join Us/g, 'href="/join">Join Us');
    jsx = jsx.replace(/href="\/#">About/g, 'href="/about">About');
    jsx = jsx.replace(/href="\/#">Careers/g, 'href="/join">Careers');
    jsx = jsx.replace(/href="\/#">Contact/g, 'href="/join">Contact');

    jsx = jsx.replace(
        /<button className="([^"]*)">([\s]*)(Partner With Us|Join the Movement|Inquire for Partnership)([\s]*)<\/button>/g,
        `<a href="/join"><button className="$1">$2$3$4</button></a>`
    );
    jsx = jsx.replace(
        /<button className="([^"]*)">([\s]*)<span([^>]*)><\/span>([\s]*)Inquire for Partnership([\s]*)<\/button>/g,
        `<a href="/join"><button className="$1">$2<span$3></span>$4Inquire for Partnership$5</button></a>`
    );

    // Fix style attributes
    jsx = jsx.replace(/style="([^"]*)"/g, (match, p1) => {
        const styleObj = p1.split(';').filter(s => s.trim() !== '').reduce((acc, curr) => {
            let [key, value] = curr.split(':');
            if (key && value) {
                key = key.trim().replace(/-([a-z])/g, (g) => g[1].toUpperCase());
                acc[key] = value.trim();
            }
            return acc;
        }, {});
        return `style={${JSON.stringify(styleObj)}}`;
    });

    const componentStr = `import React from 'react';
import { useInteractiveElements } from './useInteractiveElements';

export default function ${file.name}() {
  useInteractiveElements();
  return (
    <>
      ${jsx}
    </>
  );
}`;

    fs.writeFileSync(path.join(__dirname, file.out), componentStr);
});

// Create wrappers
const pages = [
    { component: 'Home' },
    { component: 'About' },
    { component: 'Work' },
    { component: 'Join' }
];

pages.forEach(page => {
    const wrapper = `import React, { useState, useEffect } from 'react';
import Desktop${page.component} from './Desktop${page.component}';
import Mobile${page.component} from './Mobile${page.component}';

export default function ${page.component}() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile ? <Mobile${page.component} /> : <Desktop${page.component} />;
}`;
    fs.writeFileSync(path.join(__dirname, `src/${page.component}.jsx`), wrapper);
});

console.log('Mobile components generated and wrappers created.');
