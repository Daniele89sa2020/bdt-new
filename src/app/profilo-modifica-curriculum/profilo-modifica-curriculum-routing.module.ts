import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfiloModificaCurriculumPage } from './profilo-modifica-curriculum.page';

const routes: Routes = [
  {
    path: '',
    component: ProfiloModificaCurriculumPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfiloModificaCurriculumPageRoutingModule {}
