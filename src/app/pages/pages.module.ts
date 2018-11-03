import {NgModule} from '@angular/core';
import {PagesComponent} from './pages.component';
import {PagesRoutingModule} from './pages-routing.module';
import {ChatsModule} from './chats/chats.module';
import {UiModule} from '../ui/ui.module';

const PAGES_COMPONENTS = [
  PagesComponent
];

@NgModule({
  imports: [
    PagesRoutingModule,
    UiModule,
    ChatsModule
  ],
  declarations: [...PAGES_COMPONENTS],
})
export class PagesModule {
}
