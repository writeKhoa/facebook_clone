export const timeSince = (date: number) => {
  const currentTime: any = new Date();
  const seconds: any = Math.floor((currentTime - date) / 1000);

  let interval = seconds / 86400;
  if (interval > 1) {
    const timeStamp = new Date(date);
    const day = timeStamp.getDate();
    const month = timeStamp.getMonth() + 1;
    const year = timeStamp.getFullYear();
    return `${day} tháng ${month}, ${year}.`;
  }

  interval = seconds / 3600;
  if (interval > 1) {
    return `${Math.floor(interval)} giờ.`;
  }

  interval = seconds / 60;
  if (interval > 1) {
    return `${Math.floor(interval)} phút.`;
  }

  return "Vừa xong.";
};


