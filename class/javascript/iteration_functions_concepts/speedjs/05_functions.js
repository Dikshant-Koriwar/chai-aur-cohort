function greet(name) {
  console.log(`Hello ${name}`);
}

// greet("Hitesh");
// greet("Piyush");

let globalVar = "I am global";

function modifyGlobal(){
  globalVar = "I am modified";
  let blockScopedVar = "I am blocked-scoped";
  console.log(blockScopedVar);
}

// modifyGlobal();

let config = (function () {
  let settings = {
    theme: "dark",
  };
  return settings;
})();

let person1 = {
  personsName: "ravi",
  greet: function () {
    console.log(`Hello, ${this.personsName}`);
  },
};

let person2 = {
  personsName: "hitesh",
};

person1.greet.call(person2);

/*

The `call` and `bind` functions in JavaScript are used to control the context (`this` value) within a function. Both methods allow you to explicitly set the value of `this` when invoking a function, but they behave differently.

### 1. `call()`

- **Definition**: The `call` method **immediately invokes the function** with a specified `this` value and arguments provided individually (comma-separated).
- **Syntax**: 
  ```javascript
  functionName.call(thisArg, arg1, arg2, ...)
  ```
- **When to use**: When you want to **immediately execute the function** with a different context.

### Example:

```javascript
function greet(greeting, punctuation) {
  console.log(`${greeting}, ${this.name}${punctuation}`);
}

const person = { name: 'John' };

greet.call(person, 'Hello', '!'); // Output: Hello, John!
```

---

### 2. `bind()`

- **Definition**: The `bind` method **does not immediately execute the function**. Instead, it **returns a new function** with the specified `this` value and optional arguments. 
- **Syntax**:
  ```javascript
  const boundFunction = functionName.bind(thisArg, arg1, arg2, ...)
  ```
- **When to use**: When you want to **create a new function** with a specific `this` context and optionally preset arguments, and call it later.

### Example:

```javascript
function greet(greeting, punctuation) {
  console.log(`${greeting}, ${this.name}${punctuation}`);
}

const person = { name: 'John' };

const greetJohn = greet.bind(person, 'Hello');
greetJohn('!'); // Output: Hello, John!
```

---

### 🎯 **Key Differences:**

| Feature               | `call()`                                 | `bind()`                                |
|----------------|----------------------------------|------------------------------------|
| Execution timing | Immediately invokes the function. | Returns a new function to be called later. |
| Return value     | The result of the function call. | A new function with the specified `this` context. |
| Arguments format| Comma-separated arguments. | Comma-separated arguments (can be pre-set). |
| Use case            | When you want to call the function right away with a specific context. | When you want to create a new function and call it later. |

---

### ✅ Quick Visual:

```javascript
function example() {
  console.log(this);
}

example.call({ name: 'Call Example' }); // Immediately executes
const boundExample = example.bind({ name: 'Bind Example' });
boundExample(); // Executes later
```

---

Let me know if you'd like a deeper dive or more examples! 😊
*/

let man1={
  name:"ram",
  greet:function() {
    console.log(`say hi by ${this.name}`)

  }
}
let man2={
  name:"laxman"
}
man1.greet()
man1.greet.bind(man2)()
man1.greet.bind({name:"sita"})()

/*

Let's break down your code step by step and identify any mistakes or unexpected behaviors.

---

### **Code Analysis**
```javascript
let man1 = {
  name: "ram",
  greet: function () {
    console.log(`say hi by ${this.name}`);
  },
};

let man2 = {
  name: "laxman",
};

man1.greet(); 
man1.greet.bind(man2);
man1.greet.bind({ name: "sita" });
```

---

### **Step-by-Step Execution**

1. **Executing `man1.greet();`**
   ```javascript
   man1.greet(); // Output: "say hi by ram"
   ```
   - Since `greet` is called as `man1.greet()`, the `this` inside the function refers to `man1`.
   - It correctly logs `"say hi by ram"`.

---

2. **Executing `man1.greet.bind(man2);`**
   ```javascript
   man1.greet.bind(man2);
   ```
   - This **creates a new function** where `this` is bound to `man2` (i.e., `{ name: "laxman" }`).
   - However, **the function is not executed** because `bind()` only returns a new function but doesn't call it.
   - **Mistake**: The bound function is created but never used. You should call it explicitly:
     ```javascript
     man1.greet.bind(man2)(); // Output: "say hi by laxman"
     ```

---

3. **Executing `man1.greet.bind({ name: "sita" });`**
   ```javascript
   man1.greet.bind({ name: "sita" });
   ```
   - Similar to the previous case, this creates a new function bound to `{ name: "sita" }`, but it is **never called**.
   - **Mistake**: The function is bound but never executed. You should call it:
     ```javascript
     man1.greet.bind({ name: "sita" })(); // Output: "say hi by sita"
     ```

---

### **Final Fixed Code**
If you want to see the correct output, you need to explicitly call the bound functions:

```javascript
man1.greet(); // Output: "say hi by ram"
man1.greet.bind(man2)(); // Output: "say hi by laxman"
man1.greet.bind({ name: "sita" })(); // Output: "say hi by sita"
```

---

### **Key Mistakes & Fixes**
| **Mistake** | **Fix** |
|------------|--------|
| `bind()` returns a new function but does not execute it. | You must **call** the returned function: `man1.greet.bind(man2)();` |
| The last two `bind()` statements don't do anything since they aren't called. | Again, call the function explicitly after binding. |

---

### **Alternative Approach using `call()`**
If you just want to execute the function immediately with a different `this`, use `call()` instead:

```javascript
man1.greet.call(man2); // Output: "say hi by laxman"
man1.greet.call({ name: "sita" }); // Output: "say hi by sita"
```
`call()` is preferred when you want **immediate execution**, while `bind()` is useful when you need to **save the function for later execution**.

Let me know if you need more clarification! 😊

*/