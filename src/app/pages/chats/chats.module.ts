import {NgModule} from '@angular/core';
import {ChatComponent} from './chat/chat.component';
import {NbChatModule} from '@nebular/theme';
import {CommonModule} from '@angular/common';
import {UiModule} from '../../ui/ui.module';


@NgModule({
  imports: [
    CommonModule,
    UiModule,
    NbChatModule
  ],
  exports: [],
  declarations: [ChatComponent],
  providers: [],
})
export class ChatsModule {
}
