import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProfiloModificaResidenzaPage } from './profilo-modifica-residenza.page';

describe('ProfiloModificaResidenzaPage', () => {
  let component: ProfiloModificaResidenzaPage;
  let fixture: ComponentFixture<ProfiloModificaResidenzaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfiloModificaResidenzaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProfiloModificaResidenzaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
