import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AttivitaSvoltePageRoutingModule } from './attivita-svolte-routing.module';

import { AttivitaSvoltePage } from './attivita-svolte.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AttivitaSvoltePageRoutingModule
  ],
  declarations: [AttivitaSvoltePage]
})
export class AttivitaSvoltePageModule {}
