import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PremiPartnerPageRoutingModule } from './premi-partner-routing.module';

import { PremiPartnerPage } from './premi-partner.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PremiPartnerPageRoutingModule
  ],
  declarations: [PremiPartnerPage]
})
export class PremiPartnerPageModule {}
