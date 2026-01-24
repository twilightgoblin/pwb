#!/usr/bin/env node

/**
 * Color Scheme Update Script
 * Updates all remaining components with the new Charcoal + Royal Purple + Soft Gold color scheme
 */

const fs = require('fs');
const path = require('path');

// New color scheme
const colorMappings = {
  // Old red colors to Royal Purple
  '#c83232': '#7B2CBF',
  '#a82828': '#6A1FA3', 
  '#a02828': '#6A1FA3',
  'text-red-500': 'text-[#7B2CBF]',
  'bg-red-500': 'bg-[#7B2CBF]',
  'border-red-500': 'border-[#7B2CBF]',
  'fill-red-500': 'fill-[#7B2CBF]',
  'hover:bg-red-600': 'hover:bg-[#6A1FA3]',
  'hover:text-red-600': 'hover:text-[#7B2CBF]',
  
  // Gray colors to Slate Gray for secondary text
  'text-gray-400': 'text-[#9CA3AF]',
  'text-gray-300': 'text-[#9CA3AF]',
  
  // Section labels and highlights to Soft Gold
  'text-orange-500': 'text-[#E6C87A]',
  'text-yellow-500': 'text-[#E6C87A]',
  
  // Dark backgrounds to Charcoal
  'bg-black': 'bg-[#121212]',
  'bg-gray-900': 'bg-[#121212]',
  'bg-\\[#0a0a0a\\]': 'bg-[#121212]',
  
  // Update any remaining red references
  'red-500': '[#7B2CBF]',
  'red-600': '[#6A1FA3]'
};

// Files to update
const filesToUpdate = [
  'components/about-section.tsx',
  'components/about-us-page.tsx', 
  'components/faq-section.tsx',
  'components/hero-properties.tsx',
  'components/properties-page.tsx',
  'components/service-areas-section.tsx',
  'components/services-page.tsx',
  'app/page.tsx',
  'app/layout.tsx',
  'app/about/page.tsx',
  'app/properties/page.tsx',
  'app/services/page.tsx',
  'app/faq/page.tsx'
];

function updateFileColors(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      console.log(`⚠️  File not found: ${filePath}`);
      return false;
    }

    let content = fs.readFileSync(filePath, 'utf8');
    let updated = false;

    // Apply color mappings
    for (const [oldColor, newColor] of Object.entries(colorMappings)) {
      const regex = new RegExp(oldColor.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
      if (content.includes(oldColor)) {
        content = content.replace(regex, newColor);
        updated = true;
      }
    }

    // Special patterns for specific updates
    const specialPatterns = [
      // Update any remaining red color references
      {
        pattern: /text-red-\d+/g,
        replacement: 'text-[#7B2CBF]'
      },
      {
        pattern: /bg-red-\d+/g,
        replacement: 'bg-[#7B2CBF]'
      },
      {
        pattern: /border-red-\d+/g,
        replacement: 'border-[#7B2CBF]'
      },
      // Update star colors to soft gold
      {
        pattern: /fill-yellow-\d+/g,
        replacement: 'fill-[#E6C87A]'
      },
      {
        pattern: /text-yellow-\d+/g,
        replacement: 'text-[#E6C87A]'
      },
      // Update section labels
      {
        pattern: /text-orange-\d+/g,
        replacement: 'text-[#E6C87A]'
      }
    ];

    specialPatterns.forEach(({ pattern, replacement }) => {
      if (pattern.test(content)) {
        content = content.replace(pattern, replacement);
        updated = true;
      }
    });

    if (updated) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Updated: ${filePath}`);
      return true;
    } else {
      console.log(`ℹ️  No changes needed: ${filePath}`);
      return false;
    }
  } catch (error) {
    console.error(`❌ Error updating ${filePath}:`, error.message);
    return false;
  }
}

function main() {
  console.log('🎨 Starting color scheme update...\n');
  console.log('New Color Scheme:');
  console.log('- Charcoal Black: #121212 (backgrounds, hero sections)');
  console.log('- Royal Purple: #7B2CBF (primary brand color)');
  console.log('- Soft Gold: #E6C87A (badges, highlights, ratings)');
  console.log('- Off White: #F7F7F7 (text on dark areas)');
  console.log('- Slate Gray: #9CA3AF (secondary text)\n');

  let updatedCount = 0;
  let totalCount = 0;

  filesToUpdate.forEach(file => {
    totalCount++;
    if (updateFileColors(file)) {
      updatedCount++;
    }
  });

  console.log(`\n🎉 Color update complete!`);
  console.log(`📊 Summary: ${updatedCount}/${totalCount} files updated`);
  
  if (updatedCount > 0) {
    console.log('\n✨ Your website now uses the new Charcoal + Royal Purple + Soft Gold color scheme!');
    console.log('🚀 The luxury real estate branding is now consistent across all components.');
  }
}

// Run the script
main();