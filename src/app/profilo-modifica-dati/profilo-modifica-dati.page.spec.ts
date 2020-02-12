import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProfiloModificaDatiPage } from './profilo-modifica-dati.page';

describe('ProfiloModificaDatiPage', () => {
  let component: ProfiloModificaDatiPage;
  let fixture: ComponentFixture<ProfiloModificaDatiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfiloModificaDatiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProfiloModificaDatiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
