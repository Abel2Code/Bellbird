import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';

import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { AlarmListComponent } from './alarm-list/alarm-list.component';

import { AlarmService } from './alarm.service';
import { CreateAlarmComponent } from './create-alarm/create-alarm.component'

@NgModule({
  declarations: [
    AppComponent,
    AlarmListComponent,
    CreateAlarmComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [
    AlarmService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
