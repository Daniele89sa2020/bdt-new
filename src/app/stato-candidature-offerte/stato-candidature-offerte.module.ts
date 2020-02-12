import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StatoCandidatureOffertePageRoutingModule } from './stato-candidature-offerte-routing.module';

import { StatoCandidatureOffertePage } from './stato-candidature-offerte.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StatoCandidatureOffertePageRoutingModule
  ],
  declarations: [StatoCandidatureOffertePage]
})
export class StatoCandidatureOffertePageModule {}
