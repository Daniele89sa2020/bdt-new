import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InformazioniPage } from './informazioni.page';

describe('InformazioniPage', () => {
  let component: InformazioniPage;
  let fixture: ComponentFixture<InformazioniPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformazioniPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InformazioniPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
