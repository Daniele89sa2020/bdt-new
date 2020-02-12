import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SegnalazioniAssistenzaPage } from './segnalazioni-assistenza.page';

const routes: Routes = [
  {
    path: '',
    component: SegnalazioniAssistenzaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SegnalazioniAssistenzaPageRoutingModule {}
