import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeedbackInviatiPage } from './feedback-inviati.page';

const routes: Routes = [
  {
    path: '',
    component: FeedbackInviatiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeedbackInviatiPageRoutingModule {}
