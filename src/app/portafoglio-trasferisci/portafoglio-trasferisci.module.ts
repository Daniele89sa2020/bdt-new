import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PortafoglioTrasferisciPageRoutingModule } from './portafoglio-trasferisci-routing.module';

import { PortafoglioTrasferisciPage } from './portafoglio-trasferisci.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PortafoglioTrasferisciPageRoutingModule
  ],
  declarations: [PortafoglioTrasferisciPage]
})
export class PortafoglioTrasferisciPageModule {}
