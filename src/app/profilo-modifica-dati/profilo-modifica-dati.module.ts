import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfiloModificaDatiPageRoutingModule } from './profilo-modifica-dati-routing.module';

import { ProfiloModificaDatiPage } from './profilo-modifica-dati.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfiloModificaDatiPageRoutingModule
  ],
  declarations: [ProfiloModificaDatiPage]
})
export class ProfiloModificaDatiPageModule {}
