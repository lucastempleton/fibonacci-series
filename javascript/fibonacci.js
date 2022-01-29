function fibonacci(num) {
  // type your code here
  let fibonacciSet = new Array(25);
  for (let i = 0; i<25; i++){
    let x;
    if(i === 0 ){
      fibonacciSet.push(i)
      x = i
    }else{fibonacciSet.push(i+x); x = i}
  }
  console.log(fibonacciSet[num])
  return fibonacciSet[num]
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// And a written explanation of your solution
