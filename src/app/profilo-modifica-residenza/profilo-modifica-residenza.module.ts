import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfiloModificaResidenzaPageRoutingModule } from './profilo-modifica-residenza-routing.module';

import { ProfiloModificaResidenzaPage } from './profilo-modifica-residenza.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfiloModificaResidenzaPageRoutingModule
  ],
  declarations: [ProfiloModificaResidenzaPage]
})
export class ProfiloModificaResidenzaPageModule {}
