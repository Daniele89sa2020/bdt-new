import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AttivitaNewRichiestePageRoutingModule } from './attivita-new-richieste-routing.module';

import { AttivitaNewRichiestePage } from './attivita-new-richieste.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AttivitaNewRichiestePageRoutingModule
  ],
  declarations: [AttivitaNewRichiestePage]
})
export class AttivitaNewRichiestePageModule {}
