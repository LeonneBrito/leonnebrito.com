export const isBeforeChristmasDay = (date: Date): boolean => {
  const christmasDay = new Date(date.getFullYear(), 11, 25);
  return date < christmasDay;
};
