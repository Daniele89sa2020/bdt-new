import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PortafoglioSaldoPage } from './portafoglio-saldo.page';

describe('PortafoglioSaldoPage', () => {
  let component: PortafoglioSaldoPage;
  let fixture: ComponentFixture<PortafoglioSaldoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortafoglioSaldoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PortafoglioSaldoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
