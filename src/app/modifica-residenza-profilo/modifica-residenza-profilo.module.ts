import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModificaResidenzaProfiloPageRoutingModule } from './modifica-residenza-profilo-routing.module';

import { ModificaResidenzaProfiloPage } from './modifica-residenza-profilo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModificaResidenzaProfiloPageRoutingModule
  ],
  declarations: [ModificaResidenzaProfiloPage]
})
export class ModificaResidenzaProfiloPageModule {}
