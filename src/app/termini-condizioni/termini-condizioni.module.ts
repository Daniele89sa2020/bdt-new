import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TerminiCondizioniPageRoutingModule } from './termini-condizioni-routing.module';

import { TerminiCondizioniPage } from './termini-condizioni.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TerminiCondizioniPageRoutingModule
  ],
  declarations: [TerminiCondizioniPage]
})
export class TerminiCondizioniPageModule {}
