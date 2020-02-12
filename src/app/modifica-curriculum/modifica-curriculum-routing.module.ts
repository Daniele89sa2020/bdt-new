import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModificaCurriculumPage } from './modifica-curriculum.page';

const routes: Routes = [
  {
    path: '',
    component: ModificaCurriculumPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModificaCurriculumPageRoutingModule {}
