import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfiloCambiaFotoPageRoutingModule } from './profilo-cambia-foto-routing.module';

import { ProfiloCambiaFotoPage } from './profilo-cambia-foto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfiloCambiaFotoPageRoutingModule
  ],
  declarations: [ProfiloCambiaFotoPage]
})
export class ProfiloCambiaFotoPageModule {}
