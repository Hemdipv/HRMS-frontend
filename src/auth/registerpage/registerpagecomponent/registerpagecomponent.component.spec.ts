import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterpagecomponentComponent } from './registerpagecomponent.component';

describe('RegisterpagecomponentComponent', () => {
  let component: RegisterpagecomponentComponent;
  let fixture: ComponentFixture<RegisterpagecomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterpagecomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterpagecomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
