import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ElencoCandidatiPage } from './elenco-candidati.page';

const routes: Routes = [
  {
    path: '',
    component: ElencoCandidatiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ElencoCandidatiPageRoutingModule {}
