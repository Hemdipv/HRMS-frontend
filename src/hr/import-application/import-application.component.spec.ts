import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportApplicationComponent } from './import-application.component';

describe('ImportApplicationComponent', () => {
  let component: ImportApplicationComponent;
  let fixture: ComponentFixture<ImportApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportApplicationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImportApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
