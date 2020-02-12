import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AttivitaNewCreaPage } from './attivita-new-crea.page';

describe('AttivitaNewCreaPage', () => {
  let component: AttivitaNewCreaPage;
  let fixture: ComponentFixture<AttivitaNewCreaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttivitaNewCreaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AttivitaNewCreaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
