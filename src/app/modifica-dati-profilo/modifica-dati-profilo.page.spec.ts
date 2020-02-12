import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModificaDatiProfiloPage } from './modifica-dati-profilo.page';

describe('ModificaDatiProfiloPage', () => {
  let component: ModificaDatiProfiloPage;
  let fixture: ComponentFixture<ModificaDatiProfiloPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificaDatiProfiloPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModificaDatiProfiloPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
