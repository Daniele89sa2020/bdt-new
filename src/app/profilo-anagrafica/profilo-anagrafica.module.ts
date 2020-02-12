import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfiloAnagraficaPageRoutingModule } from './profilo-anagrafica-routing.module';

import { ProfiloAnagraficaPage } from './profilo-anagrafica.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfiloAnagraficaPageRoutingModule
  ],
  declarations: [ProfiloAnagraficaPage]
})
export class ProfiloAnagraficaPageModule {}
