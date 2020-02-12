import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModificaAttivitaOffertePage } from './modifica-attivita-offerte.page';

describe('ModificaAttivitaOffertePage', () => {
  let component: ModificaAttivitaOffertePage;
  let fixture: ComponentFixture<ModificaAttivitaOffertePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificaAttivitaOffertePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModificaAttivitaOffertePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
