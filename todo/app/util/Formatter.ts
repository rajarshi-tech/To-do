export function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export function formatTime(time: string): string {
  return new Date(`1970-01-01T${time}`).toLocaleTimeString(
  "en-IN",
  {
    hour: "numeric",
    minute: "2-digit",
  }
);
}