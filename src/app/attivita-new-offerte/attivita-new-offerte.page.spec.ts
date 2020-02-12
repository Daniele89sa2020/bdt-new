import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AttivitaNewOffertePage } from './attivita-new-offerte.page';

describe('AttivitaNewOffertePage', () => {
  let component: AttivitaNewOffertePage;
  let fixture: ComponentFixture<AttivitaNewOffertePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttivitaNewOffertePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AttivitaNewOffertePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
