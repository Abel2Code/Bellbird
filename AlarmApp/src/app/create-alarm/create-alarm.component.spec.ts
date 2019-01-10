import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAlarmComponent } from './create-alarm.component';

describe('CreateAlarmComponent', () => {
  let component: CreateAlarmComponent;
  let fixture: ComponentFixture<CreateAlarmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAlarmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAlarmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
