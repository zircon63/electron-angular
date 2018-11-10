import {Injectable, NgZone} from '@angular/core';
import {Observable, Observer} from 'rxjs';
import {Database} from 'sqlite3';

@Injectable()
export class DatabaseService {
  private db: Database;

  constructor(private ngZone: NgZone) {
    if (window.require) {
      try {
        const sqlite3 = window.require('sqlite3').verbose();
        this.db = new sqlite3.Database('database.db');
      } catch (e) {
        throw e;
      }
    } else {
      console.warn('SQLite not loaded');
    }
  }

  get<T>(query: string): Observable<T> {
    return Observable.create((observer: Observer<T>) => {
      this.db.get(query, (err: Error, result: T) => {
        if (err) {
          this.ngZone.run(() => observer.error(err));
        } else {
          this.ngZone.run(() => observer.next(result));
        }
      });
    });
  }

  all<T>(query: string): Observable<T[]> {
    return Observable.create((observer: Observer<T[]>) => {
      this.db.all(query, (err: Error, result: T[]) => {
        if (err) {
          this.ngZone.run(() => observer.error(err));
        } else {
          this.ngZone.run(() => observer.next(result));
        }
      });
    });
  }
}
