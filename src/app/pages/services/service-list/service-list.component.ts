import {Component} from '@angular/core';
import {DataListComponent} from '../../../ui/components/data-list/data-list.component';
import {ServiceService} from '../shared/service.service';
import {Service} from '../shared/service';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.scss']
})
export class ServiceListComponent extends DataListComponent<Service> {
  constructor(protected serviceService: ServiceService) {
    super(serviceService);
  }

  getInstanceItem(data: Service): Service {
    return new Service(data);
  }


}
