const getTimeFromMins = (mins) => {
  if (mins && !isNaN(+mins)) {
    const hours = Math.trunc(mins / 60) < 10 ? `0${Math.trunc(mins / 60)}` : Math.trunc(mins / 60);
    const minutes = mins % 60 < 10 ? `0${mins % 60}` : mins % 60;
    return `Duration : ${hours} hours ${minutes} minutes`;
  }
  return null;
};

export default getTimeFromMins;
