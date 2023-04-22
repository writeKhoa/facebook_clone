export const generateRandomId = () => {
  const timestamp = new Date().getTime();
  const randomNum = Math.random() * Math.pow(10, 17);
  const randomId = Math.floor(timestamp + randomNum).toString(16);
  return randomId;
}