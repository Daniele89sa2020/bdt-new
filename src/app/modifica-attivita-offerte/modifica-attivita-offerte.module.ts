import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModificaAttivitaOffertePageRoutingModule } from './modifica-attivita-offerte-routing.module';

import { ModificaAttivitaOffertePage } from './modifica-attivita-offerte.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModificaAttivitaOffertePageRoutingModule
  ],
  declarations: [ModificaAttivitaOffertePage]
})
export class ModificaAttivitaOffertePageModule {}
