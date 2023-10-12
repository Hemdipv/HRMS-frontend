import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobFormDesignerComponent } from './job-form-designer.component';

describe('JobFormDesignerComponent', () => {
  let component: JobFormDesignerComponent;
  let fixture: ComponentFixture<JobFormDesignerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobFormDesignerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobFormDesignerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
