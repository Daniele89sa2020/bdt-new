import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ElencoCandidatiRichiestePage } from './elenco-candidati-richieste.page';

const routes: Routes = [
  {
    path: '',
    component: ElencoCandidatiRichiestePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ElencoCandidatiRichiestePageRoutingModule {}
