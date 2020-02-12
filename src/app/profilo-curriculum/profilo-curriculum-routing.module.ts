import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfiloCurriculumPage } from './profilo-curriculum.page';

const routes: Routes = [
  {
    path: '',
    component: ProfiloCurriculumPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfiloCurriculumPageRoutingModule {}
