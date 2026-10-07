export function getAmountOfWeeks(
  firstDayOfMonth: Date,
  lastDayOfTheMonth: Date,
) {
  return Math.ceil(
    (firstDayOfMonth.getDay() + lastDayOfTheMonth.getDate()) / 7,
  );
}
