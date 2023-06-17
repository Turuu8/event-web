
export function getFirstDayOfMonth(year: any, month: any) {
  return new Date(year, month, 2);
}
export function getLastDayOfMonth(year: any, month: any) {
  return new Date(year, month, 1);
}

export function getnextday(date: Date) {
  const date1 = new Date(date)
    .toISOString()
    .slice(0, 10)
    .split("-")
    .map((el) => parseInt(el));
  date1[2]++;
  const tom = date.toISOString().slice(0, 10).split("-").map((el, i) => {
    if(i === 2) {
      const num = parseInt(el) + 1
      return num.toString()
    }
    else{
      return el
    }
  })
  return new Date(tom.join("-"));
}
export default function useDay() {
  const today = new Date();
  const thisYear = today.getFullYear();
  const thisMonth = today.getMonth();
  const tomorrow = getnextday(today).toISOString().slice(0, 10);
  const firstDayOfThisMonth = getFirstDayOfMonth(thisYear, thisMonth).toISOString().slice(0, 10);
  const lastDayOfThisMonth = getLastDayOfMonth(thisYear, thisMonth + 1)
    .toISOString()
    .slice(0, 10);
  const lastDayOfThisWeek = new Date(thisYear, thisMonth, today.getDate() - (today.getDay() - 1) + 7).toISOString().slice(0, 10);
  return {
    today: today.toISOString().slice(0, 10),
    tomorrow,
    firstDayOfThisMonth,
    lastDayOfThisMonth,
    lastDayOfThisWeek,
  };
}
