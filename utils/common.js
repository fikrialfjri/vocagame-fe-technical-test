export const checkEmptyData = (obj) => {
  return !Object.values(obj).every(
    (x) => x !== null && x !== "" && x !== undefined
  );
};
