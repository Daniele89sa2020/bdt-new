import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PremiPartnerPage } from './premi-partner.page';

describe('PremiPartnerPage', () => {
  let component: PremiPartnerPage;
  let fixture: ComponentFixture<PremiPartnerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PremiPartnerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PremiPartnerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
