import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DettagliCandidaturePage } from './dettagli-candidature.page';

describe('DettagliCandidaturePage', () => {
  let component: DettagliCandidaturePage;
  let fixture: ComponentFixture<DettagliCandidaturePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DettagliCandidaturePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DettagliCandidaturePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
