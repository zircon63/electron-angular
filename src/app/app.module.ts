import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MissingTranslationHandler, TranslateCompiler, TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpClient} from '@angular/common/http';
import {TranslateMessageFormatCompiler} from 'ngx-translate-messageformat-compiler';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {TranslationHandler} from './shared/translation.handler';
import {CoreModule} from './shared/core.module';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    CommonModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      compiler: {
        provide: TranslateCompiler,
        useClass: TranslateMessageFormatCompiler
      },
      missingTranslationHandler: {provide: MissingTranslationHandler, useClass: TranslationHandler},
      useDefaultLang: false
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
