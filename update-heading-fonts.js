const fs = require('fs');
const path = require('path');

// Directories to search
const directories = [
    './app',
    './components'
];

// File extensions to process
const extensions = ['.tsx', '.ts', '.jsx', '.js'];

let filesProcessed = 0;
let replacementsMade = 0;

function addFontToHeadings(content) {
    let modified = content;
    let changeCount = 0;

    // Pattern 1: className with other classes but no font-bricolage
    // Matches: className="text-4xl font-bold text-orange" (without font-bricolage or font-poppins)
    const pattern1 = /className="([^"]*(?:text-|font-)[^"]*?)"/g;
    modified = modified.replace(pattern1, (match, classes) => {
        // Only add if it's likely a heading class and doesn't already have font-bricolage
        if (!classes.includes('font-bricolage') &&
            !classes.includes('font-inter') &&
            (classes.includes('text-xl') ||
                classes.includes('text-2xl') ||
                classes.includes('text-3xl') ||
                classes.includes('text-4xl') ||
                classes.includes('text-5xl') ||
                classes.includes('text-6xl') ||
                classes.includes('text-7xl') ||
                classes.includes('font-bold'))) {

            // Remove font-poppins if present (we're replacing it)
            let newClasses = classes.replace(/\s*font-poppins\s*/g, ' ');
            newClasses = newClasses.trim() + ' font-bricolage';
            changeCount++;
            return `className="${newClasses}"`;
        }
        return match;
    });

    // Pattern 2: Specific heading tags (h1, h2, h3, h4) without font-bricolage
    const headingPattern = /<(h[1-4])\s+className="([^"]*)"/g;
    modified = modified.replace(headingPattern, (match, tag, classes) => {
        if (!classes.includes('font-bricolage')) {
            // Remove font-poppins if present
            let newClasses = classes.replace(/\s*font-poppins\s*/g, ' ');
            newClasses = newClasses.trim() + ' font-bricolage';
            changeCount++;
            return `<${tag} className="${newClasses}"`;
        }
        return match;
    });

    return { content: modified, changes: changeCount };
}

function processFile(filePath) {
    try {
        const content = fs.readFileSync(filePath, 'utf8');
        const result = addFontToHeadings(content);

        if (result.changes > 0) {
            fs.writeFileSync(filePath, result.content, 'utf8');
            console.log(`✅ Updated: ${filePath} (${result.changes} headings)`);
            replacementsMade += result.changes;
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

console.log('🔄 Starting heading font update...\n');
console.log('Adding "font-bricolage" to all headings\n');

// Process each directory
directories.forEach(dir => {
    console.log(`📁 Processing directory: ${dir}`);
    walkDirectory(dir);
});

console.log('\n✨ Heading font update complete!');
console.log(`📊 Files processed: ${filesProcessed}`);
console.log(`🔄 Headings updated: ${replacementsMade}`);
