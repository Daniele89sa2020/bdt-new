import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModificaAttivitaRichiestePage } from './modifica-attivita-richieste.page';

describe('ModificaAttivitaRichiestePage', () => {
  let component: ModificaAttivitaRichiestePage;
  let fixture: ComponentFixture<ModificaAttivitaRichiestePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificaAttivitaRichiestePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModificaAttivitaRichiestePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
