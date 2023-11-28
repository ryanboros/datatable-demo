import { format, parseISO } from "date-fns";

const DATE_TIME_FORMAT = "M/d/yyyy h:mma";

// ISO8601 to formatted string
export function formatTime(timestamp, formatStr = DATE_TIME_FORMAT) {
  return format(parseISO(timestamp), formatStr);
}
