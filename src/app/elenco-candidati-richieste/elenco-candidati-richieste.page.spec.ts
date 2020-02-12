import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ElencoCandidatiRichiestePage } from './elenco-candidati-richieste.page';

describe('ElencoCandidatiRichiestePage', () => {
  let component: ElencoCandidatiRichiestePage;
  let fixture: ComponentFixture<ElencoCandidatiRichiestePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElencoCandidatiRichiestePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ElencoCandidatiRichiestePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
