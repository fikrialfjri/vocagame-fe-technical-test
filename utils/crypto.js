import CryptoJS from "crypto-js";

export const encryptData = (data) => {
  const encryptedData = CryptoJS.AES.encrypt(
    JSON.stringify(data),
    process.env.NEXT_PUBLIC_CRYPTO_SECRET_KEY
  ).toString();
  return encryptedData;
};

export const decryptData = (encryptedData) => {
  const decryptedBytes = CryptoJS.AES.decrypt(
    encryptedData,
    process.env.NEXT_PUBLIC_CRYPTO_SECRET_KEY
  );
  const decryptedData = JSON.parse(decryptedBytes.toString(CryptoJS.enc.Utf8));
  return decryptedData;
};
