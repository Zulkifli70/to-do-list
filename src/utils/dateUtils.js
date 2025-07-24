import {
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  isPast,
  isToday,
} from "date-fns";

export function formatTimeRemaining(dueDate) {
  const now = new Date();
  const due = new Date(dueDate);

  // Jika tanggal sudah lewat
  if (isPast(due) && !isToday(due)) {
    const daysPast = Math.abs(differenceInDays(due, now));
    return `${daysPast} day${daysPast > 1 ? "s" : ""} overdue`;
  }

  // Jika hari ini
  if (isToday(due)) {
    const hoursRemaining = differenceInHours(due, now);
    const minutesRemaining = differenceInMinutes(due, now);

    if (hoursRemaining > 0) {
      return `${hoursRemaining} hour${hoursRemaining > 1 ? "s" : ""} left`;
    } else if (minutesRemaining > 0) {
      return `${minutesRemaining} minute${
        minutesRemaining > 1 ? "s" : ""
      } left`;
    } else {
      return "Due now";
    }
  }

  // Untuk hari-hari mendatang
  const daysRemaining = differenceInDays(due, now);

  if (daysRemaining === 1) {
    return "Tomorrow";
  } else {
    return `${daysRemaining} day${daysRemaining > 1 ? "s" : ""} left`;
  }
}
