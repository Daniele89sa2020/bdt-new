import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DettagliCandidaturePageRoutingModule } from './dettagli-candidature-routing.module';

import { DettagliCandidaturePage } from './dettagli-candidature.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DettagliCandidaturePageRoutingModule
  ],
  declarations: [DettagliCandidaturePage]
})
export class DettagliCandidaturePageModule {}
