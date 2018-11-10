import ProcessEnv = NodeJS.ProcessEnv;

export interface IEnviroment {
  PRODUCTION: boolean;
  HASH_SALT: string;
}


export class ConfigEnviroment implements IEnviroment {
  PRODUCTION: boolean;
  HASH_SALT: string;

  constructor(data: ProcessEnv) {
    this.PRODUCTION = data.PRODUCTION === 'true';
    this.HASH_SALT = data.HASH_SALT;
  }

  getFile(): string {
    return `export const environment = {
    PRODUCTION: ${this.PRODUCTION},
    HASH_SALT: '${this.HASH_SALT}'
    };
`;
  }

}
