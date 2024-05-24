import { headers } from "next/headers";
import MobileDetect from "mobile-detect";

export default function (): boolean {
  const headerList = headers();
  return !!new MobileDetect(headerList.get("User-Agent") ?? "").mobile();
}
