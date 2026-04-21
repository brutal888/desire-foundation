const fs = require('fs');
const path = require('path');

// Extract Navbar from DesktopHome
const desktopHomeContent = fs.readFileSync('src/DesktopHome.jsx', 'utf8');
const desktopNavMatch = desktopHomeContent.match(/<nav className="fixed top-0 z-50 w-full flex justify-between items-center px-12 py-4[\s\S]*?<\/nav>/);
const desktopNav = desktopNavMatch ? desktopNavMatch[0] : null;

// Extract Navbars from MobileHome
const mobileHomeContent = fs.readFileSync('src/MobileHome.jsx', 'utf8');
const mobileTopNavMatch = mobileHomeContent.match(/<nav className="fixed top-0 w-full z-50 bg-\[#f5ffc2\]\/70 backdrop-blur-xl flex justify-between items-center px-6 py-4[\s\S]*?<\/nav>/);
const mobileTopNav = mobileTopNavMatch ? mobileTopNavMatch[0] : null;

const mobileBottomNavMatch = mobileHomeContent.match(/<div className="fixed bottom-0 w-full z-50 bg-\[#f5ffc2\]\/90[\s\S]*?<\/div>/);
const mobileBottomNav = mobileBottomNavMatch ? mobileBottomNavMatch[0] : null;

if (desktopNav) {
    let desktopMediaContent = fs.readFileSync('src/DesktopMedia.jsx', 'utf8');
    // Replace the header/nav in DesktopMedia
    desktopMediaContent = desktopMediaContent.replace(/<header[\s\S]*?<\/header>/, desktopNav);
    fs.writeFileSync('src/DesktopMedia.jsx', desktopMediaContent);
}

if (mobileTopNav && mobileBottomNav) {
    let mobileMediaContent = fs.readFileSync('src/MobileMedia.jsx', 'utf8');
    // Replace top nav
    mobileMediaContent = mobileMediaContent.replace(/<nav className="fixed top-0[\s\S]*?<\/nav>/, mobileTopNav);
    // Replace bottom nav
    mobileMediaContent = mobileMediaContent.replace(/<nav className="fixed bottom-0[\s\S]*?<\/nav>/, mobileBottomNav);
    fs.writeFileSync('src/MobileMedia.jsx', mobileMediaContent);
}

console.log('Media page navbars unified with Home page.');
