import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AttivitaRicevutePageRoutingModule } from './attivita-ricevute-routing.module';

import { AttivitaRicevutePage } from './attivita-ricevute.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AttivitaRicevutePageRoutingModule
  ],
  declarations: [AttivitaRicevutePage]
})
export class AttivitaRicevutePageModule {}
