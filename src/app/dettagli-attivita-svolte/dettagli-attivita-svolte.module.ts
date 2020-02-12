import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DettagliAttivitaSvoltePageRoutingModule } from './dettagli-attivita-svolte-routing.module';

import { DettagliAttivitaSvoltePage } from './dettagli-attivita-svolte.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DettagliAttivitaSvoltePageRoutingModule
  ],
  declarations: [DettagliAttivitaSvoltePage]
})
export class DettagliAttivitaSvoltePageModule {}
