import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PortafoglioAcquistaPageRoutingModule } from './portafoglio-acquista-routing.module';

import { PortafoglioAcquistaPage } from './portafoglio-acquista.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PortafoglioAcquistaPageRoutingModule
  ],
  declarations: [PortafoglioAcquistaPage]
})
export class PortafoglioAcquistaPageModule {}
