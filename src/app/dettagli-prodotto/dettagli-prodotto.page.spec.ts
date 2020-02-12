import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DettagliProdottoPage } from './dettagli-prodotto.page';

describe('DettagliProdottoPage', () => {
  let component: DettagliProdottoPage;
  let fixture: ComponentFixture<DettagliProdottoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DettagliProdottoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DettagliProdottoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
