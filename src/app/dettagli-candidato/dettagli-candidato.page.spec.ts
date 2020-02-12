import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DettagliCandidatoPage } from './dettagli-candidato.page';

describe('DettagliCandidatoPage', () => {
  let component: DettagliCandidatoPage;
  let fixture: ComponentFixture<DettagliCandidatoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DettagliCandidatoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DettagliCandidatoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
