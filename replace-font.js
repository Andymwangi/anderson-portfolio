const fs = require('fs');
const path = require('path');

// Directories to search
const directories = [
    './app',
    './components'
];

// File extensions to process
const extensions = ['.tsx', '.ts', '.jsx', '.js'];

// Replacement mapping
const replacements = {
    'font-caveat': 'font-bricolage',
    'Caveat': 'Bricolage Grotesque' // Also replace any remaining font name references
};

let filesProcessed = 0;
let replacementsMade = 0;

function processFile(filePath) {
    try {
        let content = fs.readFileSync(filePath, 'utf8');
        let modified = false;
        let fileReplacements = 0;

        // Apply all replacements
        Object.entries(replacements).forEach(([oldText, newText]) => {
            const regex = new RegExp(oldText, 'g');
            const matches = content.match(regex);
            if (matches) {
                content = content.replace(regex, newText);
                modified = true;
                fileReplacements += matches.length;
            }
        });

        if (modified) {
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`✅ Updated: ${filePath} (${fileReplacements} replacements)`);
            replacementsMade += fileReplacements;
        }

        filesProcessed++;
    } catch (error) {
        console.error(`❌ Error processing ${filePath}:`, error.message);
    }
}

function walkDirectory(dir) {
    try {
        const files = fs.readdirSync(dir);

        files.forEach(file => {
            const filePath = path.join(dir, file);
            const stat = fs.statSync(filePath);

            if (stat.isDirectory()) {
                // Skip node_modules and .next directories
                if (file !== 'node_modules' && file !== '.next' && file !== '.git') {
                    walkDirectory(filePath);
                }
            } else if (stat.isFile()) {
                const ext = path.extname(file);
                if (extensions.includes(ext)) {
                    processFile(filePath);
                }
            }
        });
    } catch (error) {
        console.error(`❌ Error reading directory ${dir}:`, error.message);
    }
}

console.log('🔄 Starting font replacement...\n');
console.log('Replacing "font-caveat" with "font-bricolage"\n');

// Process each directory
directories.forEach(dir => {
    console.log(`📁 Processing directory: ${dir}`);
    walkDirectory(dir);
});

console.log('\n✨ Font replacement complete!');
console.log(`📊 Files processed: ${filesProcessed}`);
console.log(`🔄 Total replacements: ${replacementsMade}`);
