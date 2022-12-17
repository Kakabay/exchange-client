// Functions

// reverse date
export const dateReverse = (date) => {
  return date.split("-").reverse().join(".");
};

export const parseDate = (date) => {
  return date.split(" ")[0].split("-").reverse().join(".");
};
