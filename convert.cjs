const fs = require('fs');
const path = require('path');

function convertHtmlToJsx(htmlContent, componentName) {
  // Extract body content
  const bodyMatch = htmlContent.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  let bodyContent = bodyMatch ? bodyMatch[1] : htmlContent;

  // Remove the script block at the end (we moved it to a hook)
  bodyContent = bodyContent.replace(/<script>[\s\S]*?<\/script>/gi, '');

  // Convert class to className
  bodyContent = bodyContent.replace(/class=/g, 'className=');

  // Convert for to htmlFor
  bodyContent = bodyContent.replace(/ for=/g, ' htmlFor=');

  // Self close img tags
  bodyContent = bodyContent.replace(/<img([^>]*?[^\/])>/g, '<img$1 />');
  
  // Self close input tags
  bodyContent = bodyContent.replace(/<input([^>]*?[^\/])>/g, '<input$1 />');

  // Self close br tags
  bodyContent = bodyContent.replace(/<br([^>]*?[^\/])>/g, '<br$1 />');
  
  // Remove hardcoded styles if any that have un-reactish values, or convert style string to objects (very rare in standard Tailwind html)
  // We'll skip complex inline styles and just let user fix any syntax errors if present

  const componentTemplate = `
import React from 'react';
import { useInteractiveElements } from './useInteractiveElements';

export default function ${componentName}() {
  useInteractiveElements();
  return (
    <div className="bg-background text-on-background font-body selection:bg-primary-fixed selection:text-on-primary-fixed cursor-none">
      <div className="custom-cursor hidden md:block" id="cursor"></div>
      <div className="custom-cursor-follower hidden md:block" id="cursor-follower"></div>
      ${bodyContent}
    </div>
  );
}
`;
  return componentTemplate;
}

const files = [
  { input: '../index.html', output: 'src/Home.jsx', name: 'Home' },
  { input: 'about.html', output: 'src/About.jsx', name: 'About' },
  { input: 'work.html', output: 'src/Work.jsx', name: 'Work' },
  { input: 'join.html', output: 'src/Join.jsx', name: 'Join' },
];

files.forEach(file => {
  const inputPath = path.resolve(__dirname, file.input);
  if (fs.existsSync(inputPath)) {
    const html = fs.readFileSync(inputPath, 'utf8');
    const jsx = convertHtmlToJsx(html, file.name);
    fs.writeFileSync(path.resolve(__dirname, file.output), jsx);
    console.log(`Converted ${file.input} to ${file.output}`);
  } else {
    console.log(`File not found: ${inputPath}`);
  }
});
