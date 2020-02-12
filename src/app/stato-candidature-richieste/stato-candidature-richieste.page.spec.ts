import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StatoCandidatureRichiestePage } from './stato-candidature-richieste.page';

describe('StatoCandidatureRichiestePage', () => {
  let component: StatoCandidatureRichiestePage;
  let fixture: ComponentFixture<StatoCandidatureRichiestePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatoCandidatureRichiestePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StatoCandidatureRichiestePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
