import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PasswordDimenticataPage } from './password-dimenticata.page';

const routes: Routes = [
  {
    path: '',
    component: PasswordDimenticataPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PasswordDimenticataPageRoutingModule {}
