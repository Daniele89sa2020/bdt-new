import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfiloModificaPasswordPageRoutingModule } from './profilo-modifica-password-routing.module';

import { ProfiloModificaPasswordPage } from './profilo-modifica-password.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfiloModificaPasswordPageRoutingModule
  ],
  declarations: [ProfiloModificaPasswordPage]
})
export class ProfiloModificaPasswordPageModule {}
