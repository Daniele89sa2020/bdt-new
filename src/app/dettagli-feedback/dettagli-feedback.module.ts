import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DettagliFeedbackPageRoutingModule } from './dettagli-feedback-routing.module';

import { DettagliFeedbackPage } from './dettagli-feedback.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DettagliFeedbackPageRoutingModule
  ],
  declarations: [DettagliFeedbackPage]
})
export class DettagliFeedbackPageModule {}
