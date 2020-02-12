import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModificaFeedbackInviatiPageRoutingModule } from './modifica-feedback-inviati-routing.module';

import { ModificaFeedbackInviatiPage } from './modifica-feedback-inviati.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModificaFeedbackInviatiPageRoutingModule
  ],
  declarations: [ModificaFeedbackInviatiPage]
})
export class ModificaFeedbackInviatiPageModule {}
