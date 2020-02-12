import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RicercaAttivitaRichiestePage } from './ricerca-attivita-richieste.page';

describe('RicercaAttivitaRichiestePage', () => {
  let component: RicercaAttivitaRichiestePage;
  let fixture: ComponentFixture<RicercaAttivitaRichiestePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RicercaAttivitaRichiestePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RicercaAttivitaRichiestePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
