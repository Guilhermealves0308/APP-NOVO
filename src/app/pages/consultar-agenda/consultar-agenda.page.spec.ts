import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConsultarAgendaPage } from './consultar-agenda.page';

describe('ConsultarAgendaPage', () => {
  let component: ConsultarAgendaPage;
  let fixture: ComponentFixture<ConsultarAgendaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ConsultarAgendaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
