import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AttivitaSvoltePage } from './attivita-svolte.page';

const routes: Routes = [
  {
    path: '',
    component: AttivitaSvoltePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AttivitaSvoltePageRoutingModule {}
