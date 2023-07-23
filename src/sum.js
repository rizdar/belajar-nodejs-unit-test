export const sum = (first, second) => {
  return first + second;
};

export const sumAll = (value) => {
  let total = 0;

  for (const result of value) {
    total += result;
  }
  return total;
};
