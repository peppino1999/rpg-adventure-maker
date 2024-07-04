export function calculatePrimes(max: number): number[] {
    let primes: number[] = [];
    for (let i = 2; i <= max; i++) {
      if (isPrime(i)) {
        primes.push(i);
      }
    }
    return primes;
  }

export  function isPrime(num: number): boolean {
    for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
      if (num % i === 0) return false;
    }
    return num > 1;
  }