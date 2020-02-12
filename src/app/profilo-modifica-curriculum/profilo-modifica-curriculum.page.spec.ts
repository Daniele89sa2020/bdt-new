import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProfiloModificaCurriculumPage } from './profilo-modifica-curriculum.page';

describe('ProfiloModificaCurriculumPage', () => {
  let component: ProfiloModificaCurriculumPage;
  let fixture: ComponentFixture<ProfiloModificaCurriculumPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfiloModificaCurriculumPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProfiloModificaCurriculumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
