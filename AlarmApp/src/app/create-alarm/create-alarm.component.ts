import { Component, OnInit } from '@angular/core';
import { AlarmService } from '../alarm.service';

@Component({
  selector: 'create-alarm',
  templateUrl: './create-alarm.component.html',
  styleUrls: ['./create-alarm.component.css']
})
export class CreateAlarmComponent implements OnInit {
  newAlarmId: String = '';
  newAlarmText: String = '';
  constructor(private alarmService : AlarmService) { }

  ngOnInit() {
  }

  createAlarm(){
    this.alarmService.createAlarm(this.newAlarmId, this.newAlarmText).then((res: {success}) => {
      if(res.success) {
        this.newAlarmId = ''
        this.newAlarmText = ''
      }
    });
  }

  capitalizeNewAlarmText() {
    this.newAlarmText = this.newAlarmText.toUpperCase();
  }

}
