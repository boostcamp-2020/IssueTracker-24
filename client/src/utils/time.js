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

export const getDueInfo = (time) => {
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const date = new Date(time);
  return `Due by ${
    monthNames[date.getMonth()]
  } ${date.getDate()}, ${date.getFullYear()}`;
};

export const getFormattedDate = ({ date, format }) => {
  if (format === '-') {
    const year = date.getFullYear();
    const month = String(date.getMonth()).padStart(2, 0);
    const day = String(date.getDate()+1).padStart(2, 0);
    return `${year}-${month}-${day}`;
  }
};
