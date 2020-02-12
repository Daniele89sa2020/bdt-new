import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PremiProdottiPage } from './premi-prodotti.page';

describe('PremiProdottiPage', () => {
  let component: PremiProdottiPage;
  let fixture: ComponentFixture<PremiProdottiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PremiProdottiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PremiProdottiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
