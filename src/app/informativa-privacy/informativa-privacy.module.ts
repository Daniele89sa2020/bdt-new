import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InformativaPrivacyPageRoutingModule } from './informativa-privacy-routing.module';

import { InformativaPrivacyPage } from './informativa-privacy.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InformativaPrivacyPageRoutingModule
  ],
  declarations: [InformativaPrivacyPage]
})
export class InformativaPrivacyPageModule {}
