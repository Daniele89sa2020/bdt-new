import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StatoCandidatureRichiestePageRoutingModule } from './stato-candidature-richieste-routing.module';

import { StatoCandidatureRichiestePage } from './stato-candidature-richieste.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StatoCandidatureRichiestePageRoutingModule
  ],
  declarations: [StatoCandidatureRichiestePage]
})
export class StatoCandidatureRichiestePageModule {}
