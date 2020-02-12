import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DettagliRicercaPage } from './dettagli-ricerca.page';

describe('DettagliRicercaPage', () => {
  let component: DettagliRicercaPage;
  let fixture: ComponentFixture<DettagliRicercaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DettagliRicercaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DettagliRicercaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
