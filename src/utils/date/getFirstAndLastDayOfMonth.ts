export function getFirstAndLastDayOfMonth(date: Date) {
  let first_day_of_month = new Date(date.getFullYear(), date.getMonth());
  let last_day_of_month = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  return [first_day_of_month, last_day_of_month];
}
