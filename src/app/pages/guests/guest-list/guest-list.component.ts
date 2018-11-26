import {Component} from '@angular/core';
import {DataListComponent} from '../../../ui/components/data-list/data-list.component';
import {Guest} from '../shared/guest';
import {NbToastrService} from '@nebular/theme';
import {GuestService} from '../shared/guest.service';

@Component({
  selector: 'app-guest-list',
  templateUrl: './guest-list.component.html',
  styleUrls: ['./guest-list.component.scss']
})
export class GuestListComponent extends DataListComponent<Guest> {
  constructor(protected guestService: GuestService,
              protected toastrService: NbToastrService) {
    super(guestService, toastrService);
  }
  getInstanceItem(data: Guest): Guest {
    return new Guest(data);
  }
}
