import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DettagliRicercaPageRoutingModule } from './dettagli-ricerca-routing.module';

import { DettagliRicercaPage } from './dettagli-ricerca.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DettagliRicercaPageRoutingModule
  ],
  declarations: [DettagliRicercaPage]
})
export class DettagliRicercaPageModule {}
