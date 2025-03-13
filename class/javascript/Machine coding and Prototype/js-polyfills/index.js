Object.prototype.chai = function () {
  console.log("Chai");
};

const arr = [1, 2, 3];
console.log(arr);

if (!Array.prototype.fill) {
  // throw new Error("Please update your browse");
  // Fallback - Polyfill
  Array.prototype.fill = function () {};
}

console.log(arr.fill());

const str = "Piyush";
console.log(str);
console.log(str.length);

const obj = { x: 1, length: 1 };
console.log(obj.x);




//cube my my pollyfill
if(!Array.prototype.myCube){
  Array.prototype.myCube= function(){
    return this.map((e)=>e*e*e);
  }
}
let Arr =[1,2,3,4,5,6,7,8,9,10];

const n=Arr.myCube()
console.log(n)