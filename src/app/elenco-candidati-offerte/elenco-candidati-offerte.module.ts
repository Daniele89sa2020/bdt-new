import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ElencoCandidatiOffertePageRoutingModule } from './elenco-candidati-offerte-routing.module';

import { ElencoCandidatiOffertePage } from './elenco-candidati-offerte.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ElencoCandidatiOffertePageRoutingModule
  ],
  declarations: [ElencoCandidatiOffertePage]
})
export class ElencoCandidatiOffertePageModule {}
