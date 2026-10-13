
const monthYearFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  year: "numeric",
  timeZone: "UTC",
});

export function formatMonthYear(isoYearMonth: string): string {
  return monthYearFormatter.format(new Date(`${isoYearMonth}-01`));
}

export function formatDateRange(
  startDate: string,
  endDate: string | null,
): string {
  const end = endDate ? formatMonthYear(endDate) : "Present";
  return `${formatMonthYear(startDate)} - ${end}`;
}
