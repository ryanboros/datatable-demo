import React from "react";

import { formatTime } from "utils/formatted-time";

/**
 * DateTimeRenderer
 **/
export const DateTimeRenderer = (createdAt) => {
  return createdAt ? formatTime(createdAt) : <em>N/A</em>;
};
