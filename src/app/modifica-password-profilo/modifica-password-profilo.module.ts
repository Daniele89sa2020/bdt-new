import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModificaPasswordProfiloPageRoutingModule } from './modifica-password-profilo-routing.module';

import { ModificaPasswordProfiloPage } from './modifica-password-profilo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModificaPasswordProfiloPageRoutingModule
  ],
  declarations: [ModificaPasswordProfiloPage]
})
export class ModificaPasswordProfiloPageModule {}
