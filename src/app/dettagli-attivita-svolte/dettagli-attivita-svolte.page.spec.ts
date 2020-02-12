import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DettagliAttivitaSvoltePage } from './dettagli-attivita-svolte.page';

describe('DettagliAttivitaSvoltePage', () => {
  let component: DettagliAttivitaSvoltePage;
  let fixture: ComponentFixture<DettagliAttivitaSvoltePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DettagliAttivitaSvoltePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DettagliAttivitaSvoltePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
