import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PasswordDimenticataPageRoutingModule } from './password-dimenticata-routing.module';

import { PasswordDimenticataPage } from './password-dimenticata.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PasswordDimenticataPageRoutingModule
  ],
  declarations: [PasswordDimenticataPage]
})
export class PasswordDimenticataPageModule {}
