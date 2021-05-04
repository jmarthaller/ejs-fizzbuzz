for (let x = 1; x < 101; x++) {
    let output = "";
    if (x % 3 == 0) {
        output += "Fizz";
    } else if (x % 5 == 0) {
      output += "Buzz";
    }
    console.log(output || x);
  }