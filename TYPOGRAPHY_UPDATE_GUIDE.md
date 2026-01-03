# Typography Update Script
# This script provides find-and-replace patterns for updating all pages with the new typography system

## Color Updates (Old -> New)
text-deep-forest dark:text-warm-copper -> text-orange
text-warm-copper -> text-orange
text-slate-grey dark:text-cream/80 -> text-slate-600 dark:text-slate-300
text-slate-grey dark:text-cream/70 -> text-slate-600 dark:text-slate-400
text-cream/80 -> text-slate-300
text-cream/70 -> text-slate-400
bg-deep-forest dark:bg-warm-copper -> bg-orange
border-deep-forest dark:border-warm-copper -> border-orange

## Font Family Additions
# Headings (h1, h2, h3, h4)
Add: font-poppins

# Body text (p, span, div with text)
Add: font-inter

# Accent text (special callouts, quotes)
Add: font-caveat

## Specific Pattern Updates

### Page Titles (h1)
Before: className="text-4xl md:text-5xl font-bold text-deep-forest dark:text-warm-copper"
After: className="text-4xl md:text-5xl font-bold text-orange font-poppins"

### Section Headings (h2, h3)
Before: className="text-3xl font-bold text-deep-forest dark:text-warm-copper"
After: className="text-3xl font-bold text-orange font-poppins"

### Body Paragraphs
Before: className="text-slate-grey dark:text-cream/70"
After: className="text-slate-600 dark:text-slate-400 font-inter"

### Card Titles
Before: className="text-2xl font-bold text-deep-forest dark:text-cream"
After: className="text-2xl font-bold text-slate-900 dark:text-white font-poppins"

### Buttons
Before: className="bg-deep-forest hover:bg-deep-forest/90 text-cream"
After: className="bg-orange hover:bg-orange-dark text-white font-poppins"

### Links
Before: className="text-deep-forest dark:text-warm-copper"
After: className="text-orange font-inter"

## Pages to Update
- ✅ app/page.tsx (Homepage) - DONE
- ✅ app/about/page.tsx - DONE  
- ⏳ app/projects/page.tsx
- ⏳ app/skills/page.tsx
- ⏳ app/experience/page.tsx
- ⏳ app/contact/page.tsx
- ⏳ app/certifications/page.tsx
