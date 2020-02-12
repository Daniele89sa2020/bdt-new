import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfiloCurriculumPageRoutingModule } from './profilo-curriculum-routing.module';

import { ProfiloCurriculumPage } from './profilo-curriculum.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfiloCurriculumPageRoutingModule
  ],
  declarations: [ProfiloCurriculumPage]
})
export class ProfiloCurriculumPageModule {}
