import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AttivitaNewCreaPageRoutingModule } from './attivita-new-crea-routing.module';

import { AttivitaNewCreaPage } from './attivita-new-crea.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AttivitaNewCreaPageRoutingModule
  ],
  declarations: [AttivitaNewCreaPage]
})
export class AttivitaNewCreaPageModule {}
