import {writeFile} from 'fs';
import * as dotenv from 'dotenv';
import {ConfigEnviroment} from './enviroment.interface';

const path = `${__dirname}/.env`;
dotenv.config({path: path});
const env: ConfigEnviroment = new ConfigEnviroment(process.env);
const targetPath = `./src/environments/environment${env.PRODUCTION ? '.prod' : ''}.ts`;
const envConfigFile = env.getFile();
writeFile(targetPath, envConfigFile, function (err) {
  if (err) {
    console.log(err);
  }

  console.log(`Config src: ${targetPath}`);
});
