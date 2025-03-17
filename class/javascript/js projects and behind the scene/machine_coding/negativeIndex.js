// console.log(arr[-1]);


//2
const user = {
  name: "hitesh",
  age: 40,
  password: "123",
};

const proxyUser = new Proxy(user, {
  get(target, prop) {
    console.log(prop);
    if (prop === "password") {
      throw new Error("Access Denied");
    }
    return target[prop];
  },
  set(target, prop, user){}
});
console.log(proxyUser.password);

function negativeIndex(arr) {
  return new Proxy(arr, {
    get(target, prop) {
      const index = Number(prop);
      if (index < 0) {
        return target[target.length + index];
      }
      return target[index];
    },
    set(target, prop, value) {
      const index = Number(prop);
      if (index < 0) {
        target[target.length + index] = value;
      } else {
        target[index] = value;
      }
      return true;
    },
  });
}


//1
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let newArr = negativeIndex(arr);

console.log(arr[-1]);
console.log(newArr[-1]);
newArr[-1] = 22;
console.log(newArr);
console.log(arr);

// In the code you've provided, the `Proxy` is being used to handle negative indexing, which JavaScript doesn't natively support.

// ### Let's break it down step by step:

// 1. **The `negativeIndex` function** creates a proxy around the original array (`arr`). 
// 2. **The `get` trap** is triggered when accessing an element. It allows negative indexing by converting a negative index to a positive one (`target.length + index`).
// 3. **The `set` trap** is triggered when assigning a value. It also handles negative indices and assigns the value to the corresponding positive index.

// ### Output of the code:
// ```js
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let newArr = negativeIndex(arr);

// console.log(arr[-1]);  // undefined (because original array does not support negative indexing)
// console.log(newArr[-1]); // 10 (proxy handles negative index)

// newArr[-1] = 22; // sets the last element to 22
// console.log(newArr); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 22]
// console.log(arr); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 22]
// ```

// ### Why is the original array (`arr`) changing?
// - The proxy is **directly wrapping the original array**, so any modification through the proxy (`newArr`) **directly affects the original array (`arr`)**.

// ### Conclusion:
// Yes, it **modifies the original array** because the proxy is acting as a wrapper around the same reference.



// Not exactly a **shallow copy**, but rather **direct reference sharing**.

// ### What's happening?
// - The `Proxy` is **not creating a copy of the array (`arr`)**, shallow or deep.
// - Instead, it **directly references the original array (`arr`)** and intercepts the operations (like `get` and `set`) through the proxy traps.

// ### Why not a shallow copy?
// A **shallow copy** would mean creating a new array and copying the references of the original array's elements. However, here, the `Proxy` directly operates on the original array itself.

// ### Proof:
// If you check their memory reference:

// ```js
// console.log(arr === newArr); // true
// ```

// This confirms that `newArr` and `arr` are pointing to the **same array in memory**.

// ### In simple terms:
// - `Proxy` acts as a **wrapper** that adds custom behavior (like negative indexing), but **doesn't create a new copy of the array**.  
// - So, modifying `newArr` directly affects `arr`.

// Would you like me to show you how to make a shallow copy and apply the proxy on that instead?