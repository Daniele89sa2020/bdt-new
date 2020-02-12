import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PremiProdottiPageRoutingModule } from './premi-prodotti-routing.module';

import { PremiProdottiPage } from './premi-prodotti.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PremiProdottiPageRoutingModule
  ],
  declarations: [PremiProdottiPage]
})
export class PremiProdottiPageModule {}
