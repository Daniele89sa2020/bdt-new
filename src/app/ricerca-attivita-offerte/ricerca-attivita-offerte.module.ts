import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RicercaAttivitaOffertePageRoutingModule } from './ricerca-attivita-offerte-routing.module';

import { RicercaAttivitaOffertePage } from './ricerca-attivita-offerte.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RicercaAttivitaOffertePageRoutingModule
  ],
  declarations: [RicercaAttivitaOffertePage]
})
export class RicercaAttivitaOffertePageModule {}
