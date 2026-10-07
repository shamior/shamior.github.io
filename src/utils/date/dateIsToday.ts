export function dateIsToday(date: Date) {
  const hoje = new Date();
  return (
    date.getFullYear() == hoje.getFullYear() &&
    date.getMonth() == hoje.getMonth() &&
    date.getDate() == hoje.getDate()
  );
}
