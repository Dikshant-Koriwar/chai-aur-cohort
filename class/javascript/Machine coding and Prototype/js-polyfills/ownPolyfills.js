if (!Array.prototype.myFilter) {
  Array.prototype.myFilter = function (userFn) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
      result.push(userFn(this[i]));
    }
    return result;
  };
}

if (!Array.prototype.myMap) {
  Array.prototype.myMap = function (userFn) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
      result.push(userFn(this[i]));
    }
    return result;
  };
}


if (!Array.prototype.myforEach) {
  Array.prototype.myforEach = function (userFn) {
    let result = [];
    
    for (let i = 0; i < this.length; i++) {
      let newValue = userFn(this[i]);
       result.push(newValue); 
    }

    return result; 
  };
}




let arr1 = [1, 2, 3, 4, 5];
let custFilter = arr1.myFilter((oper) => oper % 2 == 0);
console.log(custFilter);


let arr2 = [1, 2, 3, 4, 5];
let custMap = arr2.myMap((el) => el * 2);
console.log(custMap);


let arr3 = [1, 2, 3, 4, 5];
let custforEach = arr3.myforEach(num => num + 1);
console.log(custforEach);



