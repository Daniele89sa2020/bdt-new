import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TerminiCondizioniPage } from './termini-condizioni.page';

describe('TerminiCondizioniPage', () => {
  let component: TerminiCondizioniPage;
  let fixture: ComponentFixture<TerminiCondizioniPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerminiCondizioniPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TerminiCondizioniPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
