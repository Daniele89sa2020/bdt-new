import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ElencoCandidatiOffertePage } from './elenco-candidati-offerte.page';

describe('ElencoCandidatiOffertePage', () => {
  let component: ElencoCandidatiOffertePage;
  let fixture: ComponentFixture<ElencoCandidatiOffertePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElencoCandidatiOffertePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ElencoCandidatiOffertePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
