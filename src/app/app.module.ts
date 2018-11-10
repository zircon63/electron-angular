import {CommonModule} from '@angular/common';
import {HttpClient} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MissingTranslationHandler, TranslateCompiler, TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {TranslateMessageFormatCompiler} from 'ngx-translate-messageformat-compiler';
import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {AuthModule} from './auth/auth.module';
import {PagesModule} from './pages/pages.module';
import {CoreModule} from './shared/core.module';
import {TranslationHandler} from './shared/translation.handler';
import {UiModule} from './ui/ui.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    CommonModule,
    AppRoutingModule,
    AuthModule,
    PagesModule,
    NgbModule.forRoot(),
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
    }),
    UiModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
