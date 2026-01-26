import { format, isToday, isYesterday } from "date-fns";

export function formatMessageTime(date: Date): string {
  return format(date, "h:mm a");
}

export function formatMessageTime24h(date: Date): string {
  return format(date, "HH:mm");
}

export function formatDateDivider(date: Date): string {
  if (isToday(date)) return "TODAY";
  if (isYesterday(date)) return "YESTERDAY";
  return format(date, "MMMM d, yyyy").toUpperCase();
}

export function formatDateDividerFacebook(date: Date): string {
  if (isToday(date)) return format(date, "h:mm a");
  if (isYesterday(date)) return "Yesterday " + format(date, "h:mm a");
  return format(date, "MMM d, h:mm a");
}

export function formatDateDividerInstagram(date: Date): string {
  if (isToday(date)) return "Today " + format(date, "h:mm a");
  if (isYesterday(date)) return "Yesterday " + format(date, "h:mm a");
  return format(date, "MMM d, h:mm a");
}

export function formatDateDividerTwitter(date: Date): string {
  if (isToday(date)) return format(date, "h:mm a");
  return format(date, "MMM d, yyyy, h:mm a");
}

export function formatLastSeen(date: Date): string {
  if (isToday(date)) return "last seen today at " + format(date, "h:mm a");
  if (isYesterday(date)) return "last seen yesterday at " + format(date, "h:mm a");
  return "last seen " + format(date, "MMM d") + " at " + format(date, "h:mm a");
}

export function getNextTimestamp(messages: { timestamp: Date }[]): Date {
  if (messages.length === 0) {
    return new Date(Date.now() - 30 * 60 * 1000);
  }
  const lastMessage = messages[messages.length - 1];
  const lastTime = new Date(lastMessage.timestamp);
  const minutesToAdd = Math.floor(Math.random() * 3) + 1;
  return new Date(lastTime.getTime() + minutesToAdd * 60 * 1000);
}

export function isSameDay(d1: Date, d2: Date): boolean {
  return (
    d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate()
  );
}
