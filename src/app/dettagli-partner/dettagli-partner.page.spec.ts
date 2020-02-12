import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DettagliPartnerPage } from './dettagli-partner.page';

describe('DettagliPartnerPage', () => {
  let component: DettagliPartnerPage;
  let fixture: ComponentFixture<DettagliPartnerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DettagliPartnerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DettagliPartnerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
