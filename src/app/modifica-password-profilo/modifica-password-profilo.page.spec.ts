import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModificaPasswordProfiloPage } from './modifica-password-profilo.page';

describe('ModificaPasswordProfiloPage', () => {
  let component: ModificaPasswordProfiloPage;
  let fixture: ComponentFixture<ModificaPasswordProfiloPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificaPasswordProfiloPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModificaPasswordProfiloPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
