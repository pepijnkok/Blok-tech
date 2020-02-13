function sum() {
  var total = 0;
  var index = 1;


  while (++index < process.agrv.length) {
    total += Number(process.argv[index]);
  }
    console.log(total);
}

sum();
xd