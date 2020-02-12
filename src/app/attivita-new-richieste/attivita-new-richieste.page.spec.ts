import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AttivitaNewRichiestePage } from './attivita-new-richieste.page';

describe('AttivitaNewRichiestePage', () => {
  let component: AttivitaNewRichiestePage;
  let fixture: ComponentFixture<AttivitaNewRichiestePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttivitaNewRichiestePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AttivitaNewRichiestePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
