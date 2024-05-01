import { headers } from "next/headers";
import MobileDetect from "mobile-detect";

export const useIsMobileServer = (): boolean => {
  const headerList = headers();
  return !!new MobileDetect(headerList.get("User-Agent") ?? "").mobile();
};
