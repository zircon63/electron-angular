export interface IEnviroment {
  production: boolean;
  SOCKET_URL: string;
  WEB_RTC_URL: string;
  encrypt: ICryptData;
  mind: IMindAPIData;
}

export interface ICryptData {
  hash: string;
  AES: string;
}

export interface IMindAPIData {
  URL: string;
  APP_ID: string;
}
