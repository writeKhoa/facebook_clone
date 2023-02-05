function decimalAdjust(num: number, divideNum: number, getNum: number) {
  return (num / divideNum).toFixed(getNum);
}

const oneThousand: number = 1000;
const oneMillion: number = 1000000;

export const processCount = (count: number) => {
  if (count > oneThousand && count < oneThousand * 10) {
    return `${decimalAdjust(count, oneThousand, 1)}K`;
  } else if (count > oneThousand * 10 && count < oneThousand * 100) {
    return `${decimalAdjust(count, oneThousand, 0)}K`;
  } else if (count > oneMillion && count < oneMillion * 10) {
    return `${decimalAdjust(count, oneMillion, 1)} triệu`;
  } else if (count > oneMillion * 10) {
    return `${decimalAdjust(count, oneMillion, 0)} triệu`;
  } else {
    return count;
  }
};
