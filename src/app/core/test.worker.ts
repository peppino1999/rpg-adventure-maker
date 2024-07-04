/// <reference lib="webworker" />

import { calculatePrimes } from "./utils/test.utils";

addEventListener('message', ({ data }) => {
  const response = calculatePrimes(data)
  postMessage(response);
});
