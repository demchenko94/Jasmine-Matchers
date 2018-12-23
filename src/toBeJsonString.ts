export const toBeJsonString = (actual) => {
  try {
    return JSON.parse(actual) !== null;
  } catch (err) {
    return false;
  }
};
