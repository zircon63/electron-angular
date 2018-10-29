import {ICryptData, IEnviroment, IMindAPIData} from './enviroment.interface';

const ENCRYPT_DATA: ICryptData = {
  hash: '8zgqvU6LaziThJI1uz3PevYd',
  AES: 'l0v3r-S+uD10-h4X0r1'
};

const MIND_APP_SDK: IMindAPIData = {
  APP_ID: '3392f844-9dbc-4251-b0ae-8a44efae95d1',
  URL: 'https://beta.api.mind.com'
};

export const environment: IEnviroment = {
  production: false,
  SOCKET_URL: 'https://ucalls.ru:3443/spikaenterprise',
  WEB_RTC_URL: 'https://ucalls.ru:3443/signaling',
  encrypt: ENCRYPT_DATA,
  mind: MIND_APP_SDK
};




