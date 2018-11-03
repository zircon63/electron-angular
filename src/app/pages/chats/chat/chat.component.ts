import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: 'chat.component.html'
})

export class ChatComponent implements OnInit {
  messages = [];

  constructor() {
  }

  ngOnInit() {
    this.messages.push({
      text: '1',
      date: new Date(),
      reply: true,
      type: 'text',
      files: null,
      user: {
        name: 'Jonh Doe',
        avatar: 'https://i.gifer.com/no.gif',
      },
    });
  }

  sendMessage(event) {
    const files = !event.files ? [] : event.files.map((file) => {
      return {
        url: file.src,
        type: file.type,
        icon: 'nb-compose',
      };
    });

    this.messages.push({
      text: event.message,
      date: new Date(),
      reply: true,
      type: files.length ? 'file' : 'text',
      files: files,
      user: {
        name: 'Jonh Doe',
        avatar: 'https://i.gifer.com/no.gif',
      },
    });
  }
}
