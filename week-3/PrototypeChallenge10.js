// You need to implement the Product constructor function and its prototype methods
function Product(name, price, stock) {
    this.name = name;
    this.price = price;
    this.stock = stock;
  }
  
  Product.prototype.applyDiscount = function (percent) {
    this.price = Math.round(this.price * (1 - percent / 100));
  };
  
  Product.prototype.purchase = function (quantity) {
    return quantity <= this.stock ? (this.stock -= quantity) : 'Not enough stock';
  };
  // Please don't remove the code below
  const readline = require('readline');
  
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  rl.on('line', (input) => {
    const { product, action } = JSON.parse(input);
    const storeItem = new Product(product.name, product.price, product.stock);
  
    if (action.type === "discount") {
      storeItem.applyDiscount(action.percent);
    } else if (action.type === "purchase") {
      process.stdout.write(JSON.stringify(storeItem.purchase(action.quantity)));
      return;
    }
  
    process.stdout.write(JSON.stringify([storeItem.price, storeItem.stock]));
  });
  