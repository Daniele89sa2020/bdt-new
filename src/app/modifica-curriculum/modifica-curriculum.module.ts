import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModificaCurriculumPageRoutingModule } from './modifica-curriculum-routing.module';

import { ModificaCurriculumPage } from './modifica-curriculum.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModificaCurriculumPageRoutingModule
  ],
  declarations: [ModificaCurriculumPage]
})
export class ModificaCurriculumPageModule {}
