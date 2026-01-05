const fs = require('fs');
const path = require('path');

// Define the color replacements
const replacements = [
  // Make body text darker in light mode
  { from: /text-gray-600 dark:text-gray-400/g, to: 'text-gray-800 dark:text-gray-400' },
  { from: /text-gray-700 dark:text-gray-300/g, to: 'text-gray-900 dark:text-gray-300' },
  
  // Update standalone gray colors (be careful with these)
  { from: /className="text-gray-600/g, to: 'className="text-gray-800' },
  { from: /className="text-gray-700/g, to: 'className="text-gray-900' },
  
  // Update in template literals
  { from: /text-gray-600 /g, to: 'text-gray-800 ' },
  { from: /text-gray-700 /g, to: 'text-gray-900 ' },
];

// Pages to update
const pagesToUpdate = [
  'app/about/page.tsx',
  'app/experience/page.tsx',
  'app/contact/page.tsx',
  'app/skills/page.tsx',
  'app/projects/page.tsx',
];

function updateFile(filePath) {
  const fullPath = path.join(process.cwd(), filePath);
  
  if (!fs.existsSync(fullPath)) {
    console.log(`⚠️  File not found: ${filePath}`);
    return;
  }

  let content = fs.readFileSync(fullPath, 'utf8');
  let modified = false;
  let changeCount = 0;

  replacements.forEach(({ from, to }) => {
    const matches = content.match(from);
    if (matches) {
      content = content.replace(from, to);
      modified = true;
      changeCount += matches.length;
    }
  });

  if (modified) {
    fs.writeFileSync(fullPath, content, 'utf8');
    console.log(`✅ Updated ${filePath} (${changeCount} changes)`);
  } else {
    console.log(`ℹ️  No changes needed in ${filePath}`);
  }
}

console.log('🎨 Updating gray colors for better light theme visibility...\n');

pagesToUpdate.forEach(updateFile);

console.log('\n✨ Color update complete!');
console.log('\nChanges made:');
console.log('  • text-gray-600 → text-gray-800 (darker body text)');
console.log('  • text-gray-700 → text-gray-900 (darker primary text)');
console.log('\nThese changes improve contrast in light mode while maintaining dark mode appearance.');
