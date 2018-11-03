import {ModuleWithProviders, NgModule} from '@angular/core';
import {NbActionsModule, NbLayoutModule, NbMenuModule, NbSidebarModule, NbThemeModule} from '@nebular/theme';
import {MainLayoutComponent} from './layout/main.layout.component';
import {MenuComponent} from './components/menu/menu.component';
import {HeaderComponent} from './components/header/header.component';
import {RouterModule} from '@angular/router';


const NB_MODULES = [
  NbLayoutModule,
  NbSidebarModule,
  NbMenuModule,
  NbActionsModule
];

const UI_PROVIDERS = [
  NbThemeModule.forRoot({name: 'corporate'}).providers,
  NbSidebarModule.forRoot().providers,
  NbMenuModule.forRoot().providers
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
