// Script to fix scores > 100% in localStorage
// Run with: node fix-localStorage.js

function fixLocalStorage() {
  console.log('🔧 Fixing localStorage scores...\n');
  
  const users = ['john', 'andreas'];
  let totalFixed = 0;
  
  users.forEach(user => {
    const key = `examPrepProgress_${user}`;
    const data = localStorage.getItem(key);
    
    if (data) {
      try {
        const progress = JSON.parse(data);
        
        if (progress.topicScores && typeof progress.topicScores === 'object') {
          let needsUpdate = false;
          const fixedScores = { ...progress.topicScores };
          
          for (const [topicId, score] of Object.entries(fixedScores)) {
            if (typeof score === 'number' && score > 100) {
              console.log(`  Fixing ${user}, topic ${topicId}: ${score}% → 100%`);
              fixedScores[topicId] = 100;
              needsUpdate = true;
              totalFixed++;
            }
          }
          
          if (needsUpdate) {
            progress.topicScores = fixedScores;
            localStorage.setItem(key, JSON.stringify(progress));
            console.log(`  ✓ Fixed localStorage for: ${user}\n`);
          }
        }
      } catch (error) {
        console.error(`  Error processing ${user}:`, error);
      }
    }
  });
  
  console.log(`\n✅ Done! Fixed ${totalFixed} scores in localStorage.`);
  console.log('\nNote: This script needs to be run in the browser console, not Node.js.');
  console.log('Copy and paste this code into your browser console:');
  console.log('\n---\n');
  console.log(`
(function() {
  const users = ['john', 'andreas'];
  let totalFixed = 0;
  
  users.forEach(user => {
    const key = \`examPrepProgress_\${user}\`;
    const data = localStorage.getItem(key);
    
    if (data) {
      try {
        const progress = JSON.parse(data);
        
        if (progress.topicScores && typeof progress.topicScores === 'object') {
          let needsUpdate = false;
          const fixedScores = { ...progress.topicScores };
          
          for (const [topicId, score] of Object.entries(fixedScores)) {
            if (typeof score === 'number' && score > 100) {
              console.log(\`  Fixing \${user}, topic \${topicId}: \${score}% → 100%\`);
              fixedScores[topicId] = 100;
              needsUpdate = true;
              totalFixed++;
            }
          }
          
          if (needsUpdate) {
            progress.topicScores = fixedScores;
            localStorage.setItem(key, JSON.stringify(progress));
            console.log(\`  ✓ Fixed localStorage for: \${user}\`);
          }
        }
      } catch (error) {
        console.error(\`  Error processing \${user}:\`, error);
      }
    }
  });
  
  console.log(\`\\n✅ Done! Fixed \${totalFixed} scores in localStorage.\\nRefresh the page to see changes.\`);
})();
  `);
  console.log('\n---\n');
}

fixLocalStorage();

