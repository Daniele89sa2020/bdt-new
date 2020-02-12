import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DettagliAttivitaRicevutePage } from './dettagli-attivita-ricevute.page';

describe('DettagliAttivitaRicevutePage', () => {
  let component: DettagliAttivitaRicevutePage;
  let fixture: ComponentFixture<DettagliAttivitaRicevutePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DettagliAttivitaRicevutePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DettagliAttivitaRicevutePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
