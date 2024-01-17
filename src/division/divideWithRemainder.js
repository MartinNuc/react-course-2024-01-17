export function divideWithRemainder(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error('Inputs should be numbers.');
  }
  if (b === 0) {
    throw new Error('Cannot divide by zero.');
  }
  
  const result = Math.floor(a / b);
  const remainder = a % b;
  
  return {
    result,
    remainder
  };
}
