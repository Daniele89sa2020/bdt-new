import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProfiloAnagraficaPage } from './profilo-anagrafica.page';

describe('ProfiloAnagraficaPage', () => {
  let component: ProfiloAnagraficaPage;
  let fixture: ComponentFixture<ProfiloAnagraficaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfiloAnagraficaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProfiloAnagraficaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
