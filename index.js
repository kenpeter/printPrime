var isPrime = (x) => {
  let c = 0;
  for(let i=x; i>=1; i--) {
    // big % big, then big % smaller
    if(x%i === 0) {
      c++;
    }
  }

  // self and 1
  if(c === 2) {
    return true;
  } else {
    return false;
  }
}

var printPrime = (n) => {
  for(let i=1; i<=n; i++) {
    if(isPrime(i)) {
      console.log(i);
    }
  }
}

printPrime(100);