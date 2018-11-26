import {NbMenuItem} from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Home',
    link: '/',
    home: true,
  },
  {
    title: 'Rooms',
    link: '/rooms/list'
  },
  {
    title: 'Services',
    link: '/services/list'
  },
  {
    title: 'Guests',
    link: '/guests/list'
  },
  {
    title: 'Room Services',
    link: '/room-services/list'
  }
];
