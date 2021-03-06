import {ModuleWithProviders, NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import {CrudTableComponent} from './components/crud-table/crud-table.component';
import {HeaderComponent} from './components/header/header.component';
import {MenuComponent} from './components/menu/menu.component';
import {MainLayoutComponent} from './layout/main.layout.component';
import {
  MatSidenavModule,
  MatTableModule,
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatInputModule,
  MatFormFieldModule, MatSelectModule, MatSnackBarModule, MatDatepickerModule, MatNativeDateModule, MatTooltipModule,
} from '@angular/material';
import {AuthLayoutComponent} from './layout/auth.layout.component';


const MD_MODULES = [
  MatButtonModule,
  MatToolbarModule,
  MatTableModule,
  MatSidenavModule,
  MatIconModule,
  MatInputModule,
  MatFormFieldModule,
  MatSelectModule,
  MatSnackBarModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatTooltipModule
];

const UI_PROVIDERS = [
  MatDatepickerModule
];

const COMPONENTS = [
  MainLayoutComponent,
  AuthLayoutComponent,
  MenuComponent,
  HeaderComponent,
  CrudTableComponent
];

const PIPES = [];

const ENTRY_COMPONENTS = [];

@NgModule({
  imports: [...MD_MODULES, RouterModule, SharedModule],
  exports: [...COMPONENTS, ...MD_MODULES],
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
