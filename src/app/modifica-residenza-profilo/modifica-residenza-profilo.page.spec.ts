import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModificaResidenzaProfiloPage } from './modifica-residenza-profilo.page';

describe('ModificaResidenzaProfiloPage', () => {
  let component: ModificaResidenzaProfiloPage;
  let fixture: ComponentFixture<ModificaResidenzaProfiloPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificaResidenzaProfiloPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModificaResidenzaProfiloPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
