import {Component, ContentChild, EventEmitter, Input, OnInit, Output, TemplateRef} from '@angular/core';

@Component({
  selector: 'app-crud-table',
  templateUrl: './crud-table.component.html',
  styleUrls: ['./crud-table.component.scss']
})
export class CrudTableComponent implements OnInit {
  @ContentChild('tableHead') templateHead: TemplateRef<any>;
  @ContentChild('readTemplate') readTemplate: TemplateRef<any>;
  @ContentChild('editTemplate') editTemplate: TemplateRef<any>;
  @Input() items: any;
  @Output() create: EventEmitter<any> = new EventEmitter();
  editedItem: any;
  isNewRecord: boolean;

  constructor() {
  }

  ngOnInit() {
  }

  add() {
    console.log('123');
  }

  remove() {

  }

  edit() {
    console.log('edit');
  }

  loadTemplate(item: any) {
    if (this.editedItem && this.editedItem.id === item.id) {
      return this.editTemplate;
    } else {
      return this.readTemplate;
    }
  }


}
