import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs';

@Injectable()
export class NewAlarmService {

  // Observable string sources
  private newAlarmSource = new Subject<JSON>();
  // Observable string streams
  newAlarm$ = this.newAlarmSource.asObservable();

  // Service message commands
  newAlarm(alarm: JSON) {
    this.newAlarmSource.next(alarm);
  }

}
