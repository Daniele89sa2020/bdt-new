import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DettagliAttivitaRicevutePageRoutingModule } from './dettagli-attivita-ricevute-routing.module';

import { DettagliAttivitaRicevutePage } from './dettagli-attivita-ricevute.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DettagliAttivitaRicevutePageRoutingModule
  ],
  declarations: [DettagliAttivitaRicevutePage]
})
export class DettagliAttivitaRicevutePageModule {}
