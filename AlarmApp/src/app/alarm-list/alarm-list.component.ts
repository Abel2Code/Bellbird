import { Component, OnInit } from '@angular/core';
import { AlarmService } from '../alarm.service';

@Component({
  selector: 'alarm-list',
  templateUrl: './alarm-list.component.html',
  styleUrls: ['./alarm-list.component.css']
})
export class AlarmListComponent implements OnInit {

  alarms = [];

  constructor(private alarmService : AlarmService) {
    this.loadAlarms();
  }

  ngOnInit() {
  }

  // Note: Although array size is constant right now, this may change in the future
  sendVote(alarmIndex){
    let alarm = this.alarms[alarmIndex]
    let newVoteStatus = !alarm.voteStatus

    if(newVoteStatus) {
      alarm.votes++;
    } else {
      alarm.votes--;
    }

    this.alarmService.voteAlarm(alarm.id, newVoteStatus).then((res: {success}) => {
      if(res.success){
        alarm.voteStatus = newVoteStatus;
      }
    })
  }

  loadAlarms() {
    this.alarmService.getAlarms().then((res : {success, alarms}) => {
      if(res.success){
        // Transfer current alarm votes into dictionary
        let alarmVotes = {}
        for(let alarm of this.alarms) {
          alarmVotes[alarm.id] = alarm.voteStatus;
        }

        // Update new Alarms List
        this.alarms = res.alarms;
        for(let alarm of this.alarms){
          // Keeps track of whether alarm is upvoted or not
          alarm.voteStatus = alarmVotes[alarm.id] ? true : false;
        }
      }
    })
  }



}
