import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Room} from '../../rooms/shared/room';
import {Service} from '../../services/shared/service';
import {RoomServicesService} from '../shared/room-services.service';
import {debounceTime, distinctUntilChanged, switchMap, tap} from 'rxjs/operators';
import {RoomService} from '../shared/room-service';
import {MatOptionSelectionChange, MatSelect, MatSnackBar} from '@angular/material';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-room-service-list',
  templateUrl: './room-service-list.component.html',
  styleUrls: ['./room-service-list.component.scss']
})
export class RoomServiceListComponent implements OnInit, AfterViewInit {
  @ViewChild('serviceSelect') servicesSelect: MatSelect;
  rooms: Room[];
  services: Service[];
  form: FormGroup;
  relations: RoomService[];
  private options$: Subscription;

  constructor(private roomServices: RoomServicesService,
              private snackBar: MatSnackBar,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.roomServices.getRoomsAndServices().subscribe((values: [Room[], Service[]]) => {
      this.rooms = values[0];
      this.services = values[1];
    });
    this.roomServices.getAll().subscribe(values => {
      this.relations = values;
    });
    this.form = this.fb.group({
      room: [],
      services: []
    });
    this.form.get('services').disable();
    this.form.get('room').valueChanges
      .pipe(
        tap(() => {
          if (this.options$) {
            this.options$.unsubscribe();
            this.options$ = null;
          }
          this.form.get('services').disable();
        }),
        distinctUntilChanged(),
        debounceTime(250),
        switchMap((roomId: number) => this.roomServices.get(roomId))
      )
      .subscribe((values: RoomService[]) => {
        const ids = values.map(value => value.service_id);
        this.form.get('services').enable();
        this.form.get('services').setValue(ids);
        this.options$ = this.servicesSelect.optionSelectionChanges
          .pipe(
            switchMap((change: MatOptionSelectionChange) => {
              const relation = new RoomService({
                id: null,
                service_id: change.source.value,
                room_id: this.form.get('room').value
              });
              if (change.source.selected) {
                return this.roomServices.create(relation);
              } else {
                return this.roomServices.remove(relation);
              }
            })
          )
          .subscribe(() => {
            this.snackBar.open('Success!', 'OK');
          });

      });
    //
  }

  ngAfterViewInit(): void {
  }
}
