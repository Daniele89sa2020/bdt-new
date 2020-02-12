import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AttivitaStoricoPage } from './attivita-storico.page';

describe('AttivitaStoricoPage', () => {
  let component: AttivitaStoricoPage;
  let fixture: ComponentFixture<AttivitaStoricoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttivitaStoricoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AttivitaStoricoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
