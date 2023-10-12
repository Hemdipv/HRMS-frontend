import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceivedApplicationComponent } from './received-application.component';

describe('ReceivedApplicationComponent', () => {
  let component: ReceivedApplicationComponent;
  let fixture: ComponentFixture<ReceivedApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceivedApplicationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceivedApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
