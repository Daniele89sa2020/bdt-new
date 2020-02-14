import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ElencoCandidatiPageRoutingModule } from './elenco-candidati-routing.module';

import { ElencoCandidatiPage } from './elenco-candidati.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ElencoCandidatiPageRoutingModule
  ],
  declarations: [ElencoCandidatiPage]
})
export class ElencoCandidatiPageModule {}
