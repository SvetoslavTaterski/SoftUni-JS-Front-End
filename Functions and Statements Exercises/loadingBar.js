function solve(num) {
  if (num == 100) {
    console.log(`100% Complete!\n[%%%%%%%%%%]`);
  } else {
    let resultString = `${num}% [..........]\nStill loading...`;

    for (let i = 0; i < num / 10; i++) {
      resultString = resultString.replace(".", "%");
    }

    console.log(resultString);
  }
}

solve(50);
