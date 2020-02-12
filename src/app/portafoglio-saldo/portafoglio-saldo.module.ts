import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PortafoglioSaldoPageRoutingModule } from './portafoglio-saldo-routing.module';

import { PortafoglioSaldoPage } from './portafoglio-saldo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PortafoglioSaldoPageRoutingModule
  ],
  declarations: [PortafoglioSaldoPage]
})
export class PortafoglioSaldoPageModule {}
