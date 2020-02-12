import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RicercaAttivitaRichiestePageRoutingModule } from './ricerca-attivita-richieste-routing.module';

import { RicercaAttivitaRichiestePage } from './ricerca-attivita-richieste.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RicercaAttivitaRichiestePageRoutingModule
  ],
  declarations: [RicercaAttivitaRichiestePage]
})
export class RicercaAttivitaRichiestePageModule {}
