import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SegnalazioniAssistenzaPage } from './segnalazioni-assistenza.page';

describe('SegnalazioniAssistenzaPage', () => {
  let component: SegnalazioniAssistenzaPage;
  let fixture: ComponentFixture<SegnalazioniAssistenzaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SegnalazioniAssistenzaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SegnalazioniAssistenzaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
