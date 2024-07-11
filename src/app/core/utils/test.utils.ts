import { UserTypes } from '../models/users';

export function calculatePrimes(max: number): number[] {
  let primes: number[] = [];
  for (let i = 2; i <= max; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }
  return primes;
}

export function isPrime(num: number): boolean {
  for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
}

export const mocks = {
  signupData: {
    email: 'testPlayer2@mail.com',
    password: '12345',
    type: UserTypes.PLAYER,
  },
  mockResponse: {
    accessToken: 'testToken',
    user: {
      id: 1,
      type: UserTypes.PLAYER,
      email: 'testPlayer2@mail.com',
      partyId: 'testPartyId',
    },
  },
  loginData: {
    user: 'testPlayer2@mail.com',
    password: '12345',
  },
};
