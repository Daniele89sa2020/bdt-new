import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DomandeFrequentiPageRoutingModule } from './domande-frequenti-routing.module';

import { DomandeFrequentiPage } from './domande-frequenti.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DomandeFrequentiPageRoutingModule
  ],
  declarations: [DomandeFrequentiPage]
})
export class DomandeFrequentiPageModule {}
