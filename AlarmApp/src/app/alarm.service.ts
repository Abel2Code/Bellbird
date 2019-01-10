import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AlarmService {
  static domain: string = 'http://localhost:3000/'

  constructor(public http: Http) { }

  getAlarms() {
    return new Promise(resolve => {
       this.http.get(AlarmService.domain + 'alarm').map(res => res.json())
         .subscribe(data => {
           resolve(data);
         });
   })
  }

  createAlarm(id, text) {
    return new Promise(resolve => {
      this.http.post(AlarmService.domain + 'alarm', {id: id, text: text})
      .map(res => res.json())
      .subscribe(data => {
           resolve(data);
      });
    })
  }

  voteAlarm(id, voteStatus) {
    return new Promise(resolve => {
      this.http.post(AlarmService.domain + 'alarmVote', {id: id, voteStatus: voteStatus})
      .map(res => res.json())
      .subscribe(data => {
           resolve(data);
      });
    })
  }

}
