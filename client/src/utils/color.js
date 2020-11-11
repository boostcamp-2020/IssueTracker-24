export const getContrastYIQ = (background) => {
  background = background.replace('#', '');
  const r = parseInt(background.substr(0, 2), 16);
  const g = parseInt(background.substr(2, 2), 16);
  const b = parseInt(background.substr(4, 2), 16);
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;

  return yiq >= 128 ? 'black' : 'white';
};

const getRandomIndex = (number) => Math.floor(Math.random() * number);

export const getRandomColor = () => {
  const number = '0123456789ABCDEF';
  const color = Array(6)
    .fill('')
    .map(() => number[getRandomIndex(16)]);

  return '#' + color.join('');
};
