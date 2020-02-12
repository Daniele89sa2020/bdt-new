import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CambiaFotoPageRoutingModule } from './cambia-foto-routing.module';

import { CambiaFotoPage } from './cambia-foto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CambiaFotoPageRoutingModule
  ],
  declarations: [CambiaFotoPage]
})
export class CambiaFotoPageModule {}
