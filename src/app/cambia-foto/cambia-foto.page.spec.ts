import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CambiaFotoPage } from './cambia-foto.page';

describe('CambiaFotoPage', () => {
  let component: CambiaFotoPage;
  let fixture: ComponentFixture<CambiaFotoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CambiaFotoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CambiaFotoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
