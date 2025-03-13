// You just need to implement the mergeObjects function
function mergeObjects(obj1, obj2) {
    // Merge obj1 and obj2 into a single object
    if (typeof obj1 !== 'object' || obj1 === null) obj1 = {};
    if (typeof obj2 !== 'object' || obj2 === null) obj2 = {};
  
    if (Object.keys(obj1).length === 0 && Object.keys(obj2).length === 0) {
      return {};
    }
  
    if (Object.keys(obj1).length === 0) return obj2;
    if (Object.keys(obj2).length === 0) return obj1;
  
    return {...obj1, ...obj2};
  }
  
  // Please don't remove the code below
  const readline = require('readline');
  
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  rl.on('line', (input) => {
    const { obj1, obj2 } = JSON.parse(input);
    const result = mergeObjects(obj1, obj2);
    process.stdout.write(JSON.stringify(result));
  });