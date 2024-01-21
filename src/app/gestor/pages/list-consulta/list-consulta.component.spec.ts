import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListConsultaComponent } from './list-consulta.component';

describe('ListConsultaComponent', () => {
  let component: ListConsultaComponent;
  let fixture: ComponentFixture<ListConsultaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListConsultaComponent]
    });
    fixture = TestBed.createComponent(ListConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
