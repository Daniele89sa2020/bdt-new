import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DomandeFrequentiPage } from './domande-frequenti.page';

describe('DomandeFrequentiPage', () => {
  let component: DomandeFrequentiPage;
  let fixture: ComponentFixture<DomandeFrequentiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DomandeFrequentiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DomandeFrequentiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
