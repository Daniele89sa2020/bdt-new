import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AttivitaSvoltePage } from './attivita-svolte.page';

describe('AttivitaSvoltePage', () => {
  let component: AttivitaSvoltePage;
  let fixture: ComponentFixture<AttivitaSvoltePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttivitaSvoltePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AttivitaSvoltePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
