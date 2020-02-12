import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModificaFeedbackInviatiPage } from './modifica-feedback-inviati.page';

describe('ModificaFeedbackInviatiPage', () => {
  let component: ModificaFeedbackInviatiPage;
  let fixture: ComponentFixture<ModificaFeedbackInviatiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificaFeedbackInviatiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModificaFeedbackInviatiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
