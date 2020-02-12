import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeedbackRicevutiPage } from './feedback-ricevuti.page';

const routes: Routes = [
  {
    path: '',
    component: FeedbackRicevutiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeedbackRicevutiPageRoutingModule {}
