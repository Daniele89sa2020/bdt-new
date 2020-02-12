import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ElencoCandidatiRichiestePageRoutingModule } from './elenco-candidati-richieste-routing.module';

import { ElencoCandidatiRichiestePage } from './elenco-candidati-richieste.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ElencoCandidatiRichiestePageRoutingModule
  ],
  declarations: [ElencoCandidatiRichiestePage]
})
export class ElencoCandidatiRichiestePageModule {}
