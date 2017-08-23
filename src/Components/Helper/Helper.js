const Helper = () => {
  let movie = Math.round(Math.random() * (7 - 1) + 1);
  return `films/${movie}`;
};

export default Helper;
