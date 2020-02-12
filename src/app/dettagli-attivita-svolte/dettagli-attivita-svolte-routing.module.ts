import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DettagliAttivitaSvoltePage } from './dettagli-attivita-svolte.page';

const routes: Routes = [
  {
    path: '',
    component: DettagliAttivitaSvoltePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DettagliAttivitaSvoltePageRoutingModule {}
