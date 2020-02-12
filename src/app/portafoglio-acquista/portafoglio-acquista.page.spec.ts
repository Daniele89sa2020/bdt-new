import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PortafoglioAcquistaPage } from './portafoglio-acquista.page';

describe('PortafoglioAcquistaPage', () => {
  let component: PortafoglioAcquistaPage;
  let fixture: ComponentFixture<PortafoglioAcquistaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortafoglioAcquistaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PortafoglioAcquistaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
