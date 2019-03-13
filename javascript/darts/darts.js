export const solve = (x, y) => {

  if (typeof x !== 'number' || typeof y !== 'number') {
    return null;
  }

  let objective = Math.sqrt((x * x) + (y * y));

  if (objective > 10) {
    return 0;
  } else if (objective > 5 || objective === 10) {
    return 1;
  } else if (objective > 1 || objective === 5) {
    return 5;
  } else {
    return 10;
  }

} 