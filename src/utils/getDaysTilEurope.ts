export const getDaysTilEurope = () => {
  const today = new Date();
  const futureDate = new Date("2027-04-21");
  const diffInMs = futureDate.getTime() - today.getTime();
  const msInDay = 1000 * 60 * 60 * 24;

  return Math.trunc(diffInMs / msInDay);
};
