#!/usr/bin/env node

/**
 * Color Scheme Verification Script
 * Verifies that all components are using the new color scheme correctly
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Expected color scheme
const expectedColors = {
  charcoal: '#121212',
  royalPurple: '#7B2CBF',
  royalPurpleHover: '#6A1FA3', 
  softGold: '#E6C87A',
  offWhite: '#F7F7F7',
  slateGray: '#9CA3AF'
};

// Colors that should NOT be present (old red scheme)
const forbiddenColors = [
  '#c83232',
  '#a82828', 
  '#a02828',
  'text-red-500',
  'bg-red-500',
  'border-red-500'
];

function checkFile(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      return { status: 'not_found', issues: [] };
    }

    const content = fs.readFileSync(filePath, 'utf8');
    const issues = [];
    
    // Check for forbidden colors
    forbiddenColors.forEach(color => {
      if (content.includes(color)) {
        issues.push(`❌ Found old color: ${color}`);
      }
    });

    // Check for proper color usage
    const hasRoyalPurple = content.includes(expectedColors.royalPurple);
    const hasSoftGold = content.includes(expectedColors.softGold);
    const hasCharcoal = content.includes(expectedColors.charcoal);
    
    let colorUsage = [];
    if (hasRoyalPurple) colorUsage.push('Royal Purple ✅');
    if (hasSoftGold) colorUsage.push('Soft Gold ✅');
    if (hasCharcoal) colorUsage.push('Charcoal ✅');

    return {
      status: issues.length === 0 ? 'good' : 'issues',
      issues,
      colorUsage
    };
  } catch (error) {
    return { status: 'error', issues: [`Error reading file: ${error.message}`] };
  }
}

function main() {
  console.log('🔍 Verifying color scheme implementation...\n');
  
  // Get all TypeScript React files
  const componentFiles = [
    'components/navbar.tsx',
    'components/hero-section.tsx',
    'components/hero-properties.tsx',
    'components/about-section.tsx',
    'components/about-us-page.tsx',
    'components/why-choose-us-section.tsx',
    'components/service-areas-section.tsx',
    'components/testimonials-section.tsx',
    'components/faq-section.tsx',
    'components/cta-section.tsx',
    'components/footer-section.tsx',
    'components/contact-us-page.tsx',
    'components/properties-page.tsx',
    'components/services-page.tsx',
    'components/ui/stagger-testimonials.tsx',
    'app/globals.css',
    'styles/globals.css'
  ];

  let totalFiles = 0;
  let goodFiles = 0;
  let filesWithIssues = 0;

  componentFiles.forEach(file => {
    const result = checkFile(file);
    totalFiles++;

    console.log(`📄 ${file}`);
    
    if (result.status === 'not_found') {
      console.log('   ⚠️  File not found');
    } else if (result.status === 'error') {
      console.log('   ❌ Error checking file');
      result.issues.forEach(issue => console.log(`   ${issue}`));
      filesWithIssues++;
    } else if (result.status === 'good') {
      console.log('   ✅ Color scheme correct');
      if (result.colorUsage.length > 0) {
        console.log(`   🎨 Uses: ${result.colorUsage.join(', ')}`);
      }
      goodFiles++;
    } else {
      console.log('   ⚠️  Issues found:');
      result.issues.forEach(issue => console.log(`   ${issue}`));
      filesWithIssues++;
    }
    console.log('');
  });

  console.log('📊 Verification Summary:');
  console.log(`   ✅ Good files: ${goodFiles}`);
  console.log(`   ⚠️  Files with issues: ${filesWithIssues}`);
  console.log(`   📁 Total files checked: ${totalFiles}`);
  
  console.log('\n🎨 New Color Scheme Reference:');
  console.log('   • Charcoal Black: #121212 (backgrounds, hero sections)');
  console.log('   • Royal Purple: #7B2CBF (primary brand color)');
  console.log('   • Soft Gold: #E6C87A (badges, highlights, ratings)');
  console.log('   • Off White: #F7F7F7 (text on dark areas)');
  console.log('   • Slate Gray: #9CA3AF (secondary text)');

  if (filesWithIssues === 0) {
    console.log('\n🎉 All files are using the correct color scheme!');
    console.log('✨ Your luxury real estate website is ready with the new branding.');
  } else {
    console.log(`\n⚠️  ${filesWithIssues} files need attention.`);
  }
}

main();