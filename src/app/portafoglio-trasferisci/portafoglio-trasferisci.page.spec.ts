import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PortafoglioTrasferisciPage } from './portafoglio-trasferisci.page';

describe('PortafoglioTrasferisciPage', () => {
  let component: PortafoglioTrasferisciPage;
  let fixture: ComponentFixture<PortafoglioTrasferisciPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortafoglioTrasferisciPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PortafoglioTrasferisciPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
