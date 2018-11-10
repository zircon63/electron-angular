import {ApplicationRef, enableProdMode} from '@angular/core';
import {enableDebugTools} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AppModule} from './app/app.module';
import {environment} from './environments/environment';

if (environment.PRODUCTION) {
  enableProdMode();
}
declare global {
  interface Window {
    require: NodeRequire;
  }
}
platformBrowserDynamic().bootstrapModule(AppModule).then((module) => {
  if (!environment.PRODUCTION) {
    const applicationRef = module.injector.get(ApplicationRef);
    const appComponent = applicationRef.components[0];
    enableDebugTools(appComponent);
  }
}).catch(err => console.log(err));
