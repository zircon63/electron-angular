import {OnDestroy, ViewChild} from '@angular/core';
import {CrudTableComponent} from '../crud-table/crud-table.component';
import {CrudOperation} from '../../../pages/shared/crud.operation';
import {Subscription} from 'rxjs';
import {BaseEntity} from '../../../pages/shared/base.entity';

export abstract class DataListComponent<T extends BaseEntity> implements OnDestroy {
  @ViewChild('crud') crud: CrudTableComponent<T>;
  items: T[];
  emptyItem: T;
  private items$: Subscription;

  protected constructor(protected service: CrudOperation<T>) {
    this.emptyItem = service.emptyInstace();
    this.items$ = service.getAll().subscribe(items => this.items = items);
  }

  onEdit() {
    this.service.edit(this.crud.editedItem).subscribe((items: T[]) => {
      this.items = items;
      this.crud.editedItem = null;
    });
  }

  onCreate() {
    this.service.create(this.crud.editedItem).subscribe((items: T[]) => {
      this.items = items;
      this.crud.isNewRecord = false;
      this.crud.editedItem = null;
    });
  }

  remove(item: T) {
    this.service.remove(item).subscribe((items: T[]) => {
      this.items = items;
    });
  }

  abstract getInstanceItem(data: T): T;

  edit(item: T) {
    const editItem = this.getInstanceItem(item);
    this.crud.edit(editItem);
  }

  add() {
    const newItem = this.getInstanceItem(this.emptyItem);
    this.crud.add(newItem);
  }

  save() {
    if (this.crud.isNewRecord) {
      this.onCreate();
    } else {
      this.onEdit();
    }
  }

  cancel() {
    this.crud.cancel();
  }

  ngOnDestroy(): void {
    this.items$.unsubscribe();
  }


}
