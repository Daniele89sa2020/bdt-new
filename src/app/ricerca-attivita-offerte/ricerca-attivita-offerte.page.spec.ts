import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RicercaAttivitaOffertePage } from './ricerca-attivita-offerte.page';

describe('RicercaAttivitaOffertePage', () => {
  let component: RicercaAttivitaOffertePage;
  let fixture: ComponentFixture<RicercaAttivitaOffertePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RicercaAttivitaOffertePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RicercaAttivitaOffertePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
