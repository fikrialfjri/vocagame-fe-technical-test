import Cookies from "js-cookie";
import { decryptData, encryptData } from "./crypto";

export const saveSessionToCookie = (data, enableExpires = false) => {
  const encryptedData = encryptData(data);
  Cookies.set(
    "userSession",
    encryptedData,
    enableExpires && { expires: new Date(new Date().getTime() * 60 * 1000) }
  );
};

export const getSessionFromCookie = () => {
  const encryptedData = Cookies.get("userSession");

  if (encryptedData) {
    const decryptedData = decryptData(encryptedData);
    return decryptedData;
  }
  return null;
};
