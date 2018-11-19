import {Injectable} from '@angular/core';
import {DatabaseService} from '../../../shared/database.service';
import {ServicesModule} from '../services.module';

@Injectable({
  providedIn: ServicesModule
})
export class ServiceService {

  constructor(private db: DatabaseService) {
  }


}
