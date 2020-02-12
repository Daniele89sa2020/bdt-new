import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PasswordDimenticataPage } from './password-dimenticata.page';

describe('PasswordDimenticataPage', () => {
  let component: PasswordDimenticataPage;
  let fixture: ComponentFixture<PasswordDimenticataPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasswordDimenticataPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PasswordDimenticataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
