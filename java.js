//part 1
// let counter = 0;
// function inc () { // incursion means call itself
//     counter++;
    
//     return inc();
// }
// try {
//     inc();
// } catch (error) {
//     console.log(error);
//     console.log(counter)
// }

//part 2
const factorial = (n) => {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

function flatten(arr) {
    return arr.reduce((acc, val) => {
      if (Array.isArray(val)) {
        return acc.concat(flatten(val));
      } else {
        return acc.concat(val);
      }
    }, []);
  }
// console.log(flatten([1, 2, 3, [4, 5]]));  

const trampoline = (f, ...args) => {
    let result = f(...args);
    while (typeof result === "function") {
      result = result();
    }
    return result;
  };
  const nestedArray = [1, [2, [3, [4, [5]]]]];
const flattenedArray = trampoline(flatten)(nestedArray);
console.log(flattenedArray); // [1, 2, 3, 4, 5]

//part 3
const primeNumbersList = document.getElementById("prime-numbers");
