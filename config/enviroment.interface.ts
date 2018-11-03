import ProcessEnv = NodeJS.ProcessEnv;

export interface IEnviroment {
  ENCRYPT_AES: string;
  ENCRYPT_HASH: string;
  MIND_API_URL: string;
  MIND_APP_ID: string;
  PRODUCTION: boolean;
  SOCKET_URL: string;
  WEB_RTC_URL: string;
}


export class ConfigEnviroment implements IEnviroment {
  ENCRYPT_AES: string;
  ENCRYPT_HASH: string;
  MIND_API_URL: string;
  MIND_APP_ID: string;
  PRODUCTION: boolean;
  SOCKET_URL: string;
  WEB_RTC_URL: string;

  constructor(data: ProcessEnv) {
    this.ENCRYPT_AES = data.ENCRYPT_AES;
    this.ENCRYPT_HASH = data.ENCRYPT_HASH;
    this.MIND_API_URL = data.MIND_API_URL;
    this.MIND_APP_ID = data.MIND_APP_ID;
    this.PRODUCTION = data.PRODUCTION === 'true';
    this.SOCKET_URL = data.SOCKET_URL;
    this.WEB_RTC_URL = data.WEB_RTC_URL;
  }

  getFile(): string {
    return `export const environment = {
    ENCRYPT_AES: '${this.ENCRYPT_AES}',
    ENCRYPT_HASH: '${this.ENCRYPT_HASH}',
    MIND_API_URL: '${this.MIND_API_URL}',
    MIND_APP_ID: '${this.MIND_APP_ID}',
    PRODUCTION: ${this.PRODUCTION},
    SOCKET_URL: '${this.SOCKET_URL}',
    WEB_RTC_URL: '${this.WEB_RTC_URL}',
    };
`;
  }

}
