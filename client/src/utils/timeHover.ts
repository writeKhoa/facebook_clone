const days = [
  "Thứ hai",
  "Thứ ba",
  "Thứ tư",
  "Thứ năm",
  "Thứ sáu",
  "Thứ bảy",
  "Chủ nhật",
];

export const timeHover = (timeInput: number) => {
  const time = new Date(timeInput);
  const date = time.getDate();

  const day = time.getDay();
  const month = time.getMonth();
  const year = time.getFullYear();
  const hour = time.getHours();
  const minute = time.getMinutes();

  return `${days[day]}, ${date} tháng ${
    month + 1
  }, ${year} lúc ${hour}:${minute}`;
};
