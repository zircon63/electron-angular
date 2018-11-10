import {ModuleWithProviders, NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbInputModule,
  NbLayoutModule,
  NbListModule,
  NbMenuModule,
  NbSidebarModule,
  NbThemeModule,
  NbToastrModule,
  NbUserModule
} from '@nebular/theme';
import {HeaderComponent} from './components/header/header.component';
import {MenuComponent} from './components/menu/menu.component';
import {MainLayoutComponent} from './layout/main.layout.component';


const NB_MODULES = [
  NbLayoutModule,
  NbSidebarModule,
  NbMenuModule,
  NbActionsModule,
  NbCardModule,
  NbButtonModule,
  NbInputModule,
  NbToastrModule,
  NbUserModule,
  NbListModule
];

const UI_PROVIDERS = [
  NbThemeModule.forRoot({name: 'corporate'}).providers,
  NbSidebarModule.forRoot().providers,
  NbMenuModule.forRoot().providers,
  NbToastrModule.forRoot({
    destroyByClick: true,
    duration: 5000,
    preventDuplicates: true
  }).providers
];

const COMPONENTS = [
  MainLayoutComponent,
  MenuComponent,
  HeaderComponent
];

const PIPES = [];

const ENTRY_COMPONENTS = [];

@NgModule({
  imports: [...NB_MODULES, RouterModule],
  exports: [...COMPONENTS, ...NB_MODULES],
  declarations: [...COMPONENTS, ...PIPES],
  entryComponents: [...ENTRY_COMPONENTS]
})
export class UiModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: UiModule,
      providers: [...UI_PROVIDERS],
    };
  }
}
