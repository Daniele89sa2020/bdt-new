import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SegnalazioniAssistenzaPageRoutingModule } from './segnalazioni-assistenza-routing.module';

import { SegnalazioniAssistenzaPage } from './segnalazioni-assistenza.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SegnalazioniAssistenzaPageRoutingModule
  ],
  declarations: [SegnalazioniAssistenzaPage]
})
export class SegnalazioniAssistenzaPageModule {}
