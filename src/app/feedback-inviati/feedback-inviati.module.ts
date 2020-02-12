import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FeedbackInviatiPageRoutingModule } from './feedback-inviati-routing.module';

import { FeedbackInviatiPage } from './feedback-inviati.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FeedbackInviatiPageRoutingModule
  ],
  declarations: [FeedbackInviatiPage]
})
export class FeedbackInviatiPageModule {}
