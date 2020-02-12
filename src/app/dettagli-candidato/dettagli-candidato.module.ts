import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DettagliCandidatoPageRoutingModule } from './dettagli-candidato-routing.module';

import { DettagliCandidatoPage } from './dettagli-candidato.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DettagliCandidatoPageRoutingModule
  ],
  declarations: [DettagliCandidatoPage]
})
export class DettagliCandidatoPageModule {}
