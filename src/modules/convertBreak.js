
const convertBreak = (str) => {
  const convertedStr = str.replace(/\r?\n/g, '<br>');
  return convertedStr;
};

export default convertBreak;
