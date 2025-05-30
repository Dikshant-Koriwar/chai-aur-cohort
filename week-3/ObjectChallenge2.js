// You just need to implement the addCarColor function
function addCarColor(car, color) {
    // Add color property to the car object
      if(typeof car !== 'object' || car === 'null'|| !car.brand ||!car.model){
        return 'Invalid car'
      }
      if(typeof color !=='string' || color.trim() === ''){
        return 'Invalid color'
      }
      car.color=color;
      return car;
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  // Please don't remove the code below
  const readline = require('readline');
  
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  rl.on('line', (input) => {
    const { car, color } = JSON.parse(input);
    const result = addCarColor(car, color);
    process.stdout.write(JSON.stringify(result));
  });