import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProfesionalComponent } from './new-profesional.component';

describe('NewProfesionalComponent', () => {
  let component: NewProfesionalComponent;
  let fixture: ComponentFixture<NewProfesionalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewProfesionalComponent]
    });
    fixture = TestBed.createComponent(NewProfesionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
