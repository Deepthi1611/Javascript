function memoizedFactorial() {
  const cache = {};
  return function factorial(n) {
    if (n in cache) return cache[n];
    if (n === 0 || n === 1) return 1;
    cache[n] = n * factorial(n - 1);
    return cache[n];
  };
}

const fact = memoizedFactorial();
console.log(fact(5)); // 120 (computes: 5 * 4 * 3 * 2 * 1)
console.log(fact(5)); // 120 (cached, instant)
console.log(fact(6)); // 720 (uses cached fact(5) and computes 6 * fact(5))