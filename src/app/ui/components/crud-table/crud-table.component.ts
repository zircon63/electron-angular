import {Component, ContentChild, Input, TemplateRef} from '@angular/core';
import {BaseEntity} from '../../../pages/shared/base.entity';

@Component({
  selector: 'app-crud-table',
  templateUrl: './crud-table.component.html',
  styleUrls: ['./crud-table.component.scss']
})
export class CrudTableComponent<T extends BaseEntity> {
  @ContentChild('tableHead') templateHead: TemplateRef<any>;
  @ContentChild('readTemplate') readTemplate: TemplateRef<any>;
  @ContentChild('editTemplate') editTemplate: TemplateRef<any>;
  @Input() items: T[];
  editedItem: T;
  isNewRecord: boolean;

  loadTemplate(item: any) {
    if (this.editedItem && this.editedItem.id === item.id) {
      return this.editTemplate;
    } else {
      return this.readTemplate;
    }
  }

  add(item: T) {
    this.items.push(item);
    this.edit(item);
    this.isNewRecord = true;
  }

  edit(item: T) {
    this.editedItem = item;
  }

  cancel() {
    if (this.isNewRecord) {
      this.items.pop();
      this.isNewRecord = false;
    }
    this.editedItem = null;
  }


}
