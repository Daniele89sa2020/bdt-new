import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DettagliPartnerPageRoutingModule } from './dettagli-partner-routing.module';

import { DettagliPartnerPage } from './dettagli-partner.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DettagliPartnerPageRoutingModule
  ],
  declarations: [DettagliPartnerPage]
})
export class DettagliPartnerPageModule {}
