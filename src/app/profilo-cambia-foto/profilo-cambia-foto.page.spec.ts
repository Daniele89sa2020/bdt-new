import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProfiloCambiaFotoPage } from './profilo-cambia-foto.page';

describe('ProfiloCambiaFotoPage', () => {
  let component: ProfiloCambiaFotoPage;
  let fixture: ComponentFixture<ProfiloCambiaFotoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfiloCambiaFotoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProfiloCambiaFotoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
