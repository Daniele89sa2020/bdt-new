import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModificaAttivitaRichiestePageRoutingModule } from './modifica-attivita-richieste-routing.module';

import { ModificaAttivitaRichiestePage } from './modifica-attivita-richieste.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModificaAttivitaRichiestePageRoutingModule
  ],
  declarations: [ModificaAttivitaRichiestePage]
})
export class ModificaAttivitaRichiestePageModule {}
