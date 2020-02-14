import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ElencoCandidatiPage } from './elenco-candidati.page';

describe('ElencoCandidatiPage', () => {
  let component: ElencoCandidatiPage;
  let fixture: ComponentFixture<ElencoCandidatiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElencoCandidatiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ElencoCandidatiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
