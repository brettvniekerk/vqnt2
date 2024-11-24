import _dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

_dayjs.extend(relativeTime);

export const dayjs = _dayjs;

export const ONE_DAY_S = 86_400;

export const ONE_HOUR_S = 3_600;
