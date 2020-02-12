import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModificaDatiProfiloPageRoutingModule } from './modifica-dati-profilo-routing.module';

import { ModificaDatiProfiloPage } from './modifica-dati-profilo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModificaDatiProfiloPageRoutingModule
  ],
  declarations: [ModificaDatiProfiloPage]
})
export class ModificaDatiProfiloPageModule {}
