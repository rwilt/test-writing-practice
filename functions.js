export const sum = (a, b) => {
  return a + b;
};

export const incrementPost = (num) => {
  let a = num;
  let b = a++;
  return { a, b };
};

export const incrementPre = (num) => {
  let a = num;
  let b = ++a;
  return { a, b };
};

export const deincrement = (num) => {
  return num--;
};

export const parseInteger = (str) => {
  return parseInt(str);
};
