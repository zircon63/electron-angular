import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-room-form',
  templateUrl: './room-form.component.html'
})

export class RoomFormComponent implements OnInit {
  roomForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.roomForm = this.formBuilder.group({
      number: []
    });
  }

  save() {
    if (this.roomForm.valid) {
      console.log();
    }
  }
}
