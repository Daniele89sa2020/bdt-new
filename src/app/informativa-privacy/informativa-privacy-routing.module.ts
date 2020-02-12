import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InformativaPrivacyPage } from './informativa-privacy.page';

const routes: Routes = [
  {
    path: '',
    component: InformativaPrivacyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InformativaPrivacyPageRoutingModule {}
