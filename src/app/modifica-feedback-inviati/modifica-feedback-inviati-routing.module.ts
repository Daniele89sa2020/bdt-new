import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModificaFeedbackInviatiPage } from './modifica-feedback-inviati.page';

const routes: Routes = [
  {
    path: '',
    component: ModificaFeedbackInviatiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModificaFeedbackInviatiPageRoutingModule {}
