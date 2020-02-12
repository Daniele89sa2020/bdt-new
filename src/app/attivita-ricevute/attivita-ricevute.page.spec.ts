import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AttivitaRicevutePage } from './attivita-ricevute.page';

describe('AttivitaRicevutePage', () => {
  let component: AttivitaRicevutePage;
  let fixture: ComponentFixture<AttivitaRicevutePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttivitaRicevutePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AttivitaRicevutePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
