export const StartDateFun = (props: number) => {
  const startDate = new Date(props).toISOString().slice(0, 10).split("-");
  return startDate;
};
