import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AttivitaStoricoPageRoutingModule } from './attivita-storico-routing.module';

import { AttivitaStoricoPage } from './attivita-storico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AttivitaStoricoPageRoutingModule
  ],
  declarations: [AttivitaStoricoPage]
})
export class AttivitaStoricoPageModule {}
