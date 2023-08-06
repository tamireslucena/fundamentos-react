/**
 * method to get a random number between two numbers
 * @param min the minimum number
 * @param max the maximum number
 * @returns a random number
 */
export const getRandomArbitrary = (min: number, max: number): number => {
  return Math.random() * (max - min) + min;
}
  