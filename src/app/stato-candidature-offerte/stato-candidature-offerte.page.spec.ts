import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StatoCandidatureOffertePage } from './stato-candidature-offerte.page';

describe('StatoCandidatureOffertePage', () => {
  let component: StatoCandidatureOffertePage;
  let fixture: ComponentFixture<StatoCandidatureOffertePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatoCandidatureOffertePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StatoCandidatureOffertePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
