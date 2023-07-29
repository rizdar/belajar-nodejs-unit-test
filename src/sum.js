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

export const calculate = (numbers, callback) => {
  let total = 0;
  for (let number of numbers) {
    total += number;
  }
  callback(total);
};
export const calculateAndReturn = (numbers, callback) => {
  let total = 0;
  for (let number of numbers) {
    total += number;
  }
  return callback(total);
};
