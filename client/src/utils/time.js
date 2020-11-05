export const getTimeInfo = (time) => {
  const date = new Date(time);
  const currentDate = new Date();
  const timeDiff = currentDate - date; // milliseconds
  const oneSecond = 1000;
  const oneMinute = oneSecond * 60;
  const oneHour = oneMinute * 60;
  const oneDay = oneHour * 24;

  if (timeDiff < oneMinute) {
    const secondsDiff = Math.round(timeDiff / oneSecond);
    return `${secondsDiff} seconds ago`;
  }

  if (timeDiff < oneHour) {
    const minutesDiff = Math.round(timeDiff / oneMinute);
    return `${minutesDiff} minutes ago`;
  }

  if (timeDiff < oneDay) {
    const hoursDiff = Math.round(timeDiff / oneHour);
    return `${hoursDiff} hours ago`;
  }

  const daysDiff = Math.round(timeDiff / oneDay);
  return `${daysDiff} days ago`;
};
