// taking inspiration from the previous isEven lesson, I'm simply changing the condition to "not equals" rather than equals, i.e. "num % 2 !== 0"

const isOdd = function (num){
  return num % 2 !== 0; 
}

console.log("3 is odd: " + isOdd(3));
console.log("8 is odd: " + isOdd(8));