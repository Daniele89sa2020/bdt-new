import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registrazione',
    loadChildren: () => import('./registrazione/registrazione.module').then( m => m.RegistrazionePageModule)
  },
  {
    path: 'password-dimenticata',
    loadChildren: () => import('./password-dimenticata/password-dimenticata.module').then( m => m.PasswordDimenticataPageModule)
  },
  {
    path: 'attivita-new-crea',
    loadChildren: () => import('./attivita-new-crea/attivita-new-crea.module').then( m => m.AttivitaNewCreaPageModule)
  },
  {
    path: 'attivita-new-offerte',
    loadChildren: () => import('./attivita-new-offerte/attivita-new-offerte.module').then( m => m.AttivitaNewOffertePageModule)
  },
  {
    path: 'attivita-new-richieste',
    loadChildren: () => import('./attivita-new-richieste/attivita-new-richieste.module').then( m => m.AttivitaNewRichiestePageModule)
  },
  {
    path: 'elenco-candidati-offerte',
    loadChildren: () => import('./elenco-candidati-offerte/elenco-candidati-offerte.module').then( m => m.ElencoCandidatiOffertePageModule)
  },
  {
    path: 'modifica-attivita-offerte',
    loadChildren: () => import('./modifica-attivita-offerte/modifica-attivita-offerte.module').then( m => m.ModificaAttivitaOffertePageModule)
  },
  {
    path: 'modifica-attivita-richieste',
    loadChildren: () => import('./modifica-attivita-richieste/modifica-attivita-richieste.module').then( m => m.ModificaAttivitaRichiestePageModule)
  },
  {
    path: 'attivita-storico',
    loadChildren: () => import('./attivita-storico/attivita-storico.module').then( m => m.AttivitaStoricoPageModule)
  },
  {
    path: 'attivita-svolte',
    loadChildren: () => import('./attivita-svolte/attivita-svolte.module').then( m => m.AttivitaSvoltePageModule)
  },
  {
    path: 'attivita-ricevute',
    loadChildren: () => import('./attivita-ricevute/attivita-ricevute.module').then( m => m.AttivitaRicevutePageModule)
  },
  {
    path: 'dettagli-attivita-svolte',
    loadChildren: () => import('./dettagli-attivita-svolte/dettagli-attivita-svolte.module').then( m => m.DettagliAttivitaSvoltePageModule)
  },
  {
    path: 'dettagli-attivita-ricevute',
    loadChildren: () => import('./dettagli-attivita-ricevute/dettagli-attivita-ricevute.module').then( m => m.DettagliAttivitaRicevutePageModule)
  },
  {
    path: 'profilo-anagrafica',
    loadChildren: () => import('./profilo-anagrafica/profilo-anagrafica.module').then( m => m.ProfiloAnagraficaPageModule)
  },
  {
    path: 'profilo-curriculum',
    loadChildren: () => import('./profilo-curriculum/profilo-curriculum.module').then( m => m.ProfiloCurriculumPageModule)
  },
  {
    path: 'modifica-curriculum',
    loadChildren: () => import('./modifica-curriculum/modifica-curriculum.module').then( m => m.ModificaCurriculumPageModule)
  },
  {
    path: 'cambia-foto',
    loadChildren: () => import('./cambia-foto/cambia-foto.module').then( m => m.CambiaFotoPageModule)
  },
  {
    path: 'modifica-dati-profilo',
    loadChildren: () => import('./modifica-dati-profilo/modifica-dati-profilo.module').then( m => m.ModificaDatiProfiloPageModule)
  },
  {
    path: 'modifica-residenza-profilo',
    loadChildren: () => import('./modifica-residenza-profilo/modifica-residenza-profilo.module').then( m => m.ModificaResidenzaProfiloPageModule)
  },
  {
    path: 'modifica-password-profilo',
    loadChildren: () => import('./modifica-password-profilo/modifica-password-profilo.module').then( m => m.ModificaPasswordProfiloPageModule)
  },
  {
    path: 'feedback-inviati',
    loadChildren: () => import('./feedback-inviati/feedback-inviati.module').then( m => m.FeedbackInviatiPageModule)
  },
  {
    path: 'feedback-ricevuti',
    loadChildren: () => import('./feedback-ricevuti/feedback-ricevuti.module').then( m => m.FeedbackRicevutiPageModule)
  },
  {
    path: 'modifica-feedback-inviati',
    loadChildren: () => import('./modifica-feedback-inviati/modifica-feedback-inviati.module').then( m => m.ModificaFeedbackInviatiPageModule)
  },
  {
    path: 'portafoglio-saldo',
    loadChildren: () => import('./portafoglio-saldo/portafoglio-saldo.module').then( m => m.PortafoglioSaldoPageModule)
  },
  {
    path: 'portafoglio-acquista',
    loadChildren: () => import('./portafoglio-acquista/portafoglio-acquista.module').then( m => m.PortafoglioAcquistaPageModule)
  },
  {
    path: 'informazioni',
    loadChildren: () => import('./informazioni/informazioni.module').then( m => m.InformazioniPageModule)
  },
  {
    path: 'premi-prodotti',
    loadChildren: () => import('./premi-prodotti/premi-prodotti.module').then( m => m.PremiProdottiPageModule)
  },
  {
    path: 'premi-partner',
    loadChildren: () => import('./premi-partner/premi-partner.module').then( m => m.PremiPartnerPageModule)
  },
  {
    path: 'dettagli-partner',
    loadChildren: () => import('./dettagli-partner/dettagli-partner.module').then( m => m.DettagliPartnerPageModule)
  },
  {
    path: 'domande-frequenti',
    loadChildren: () => import('./domande-frequenti/domande-frequenti.module').then( m => m.DomandeFrequentiPageModule)
  },
  {
    path: 'segnalazioni-assistenza',
    loadChildren: () => import('./segnalazioni-assistenza/segnalazioni-assistenza.module').then( m => m.SegnalazioniAssistenzaPageModule)
  },
  {
    path: 'termini-condizioni',
    loadChildren: () => import('./termini-condizioni/termini-condizioni.module').then( m => m.TerminiCondizioniPageModule)
  },
  {
    path: 'informativa-privacy',
    loadChildren: () => import('./informativa-privacy/informativa-privacy.module').then( m => m.InformativaPrivacyPageModule)
  },
  {
    path: 'dettagli-prodotto',
    loadChildren: () => import('./dettagli-prodotto/dettagli-prodotto.module').then( m => m.DettagliProdottoPageModule)
  },
  {
    path: 'dettagli-ricerca',
    loadChildren: () => import('./dettagli-ricerca/dettagli-ricerca.module').then( m => m.DettagliRicercaPageModule)
  },
  {
    path: 'dettagli-feedback',
    loadChildren: () => import('./dettagli-feedback/dettagli-feedback.module').then( m => m.DettagliFeedbackPageModule)
  },
  {
    path: 'portafoglio-trasferisci',
    loadChildren: () => import('./portafoglio-trasferisci/portafoglio-trasferisci.module').then( m => m.PortafoglioTrasferisciPageModule)
  },
  {
    path: 'profilo-cambia-foto',
    loadChildren: () => import('./profilo-cambia-foto/profilo-cambia-foto.module').then( m => m.ProfiloCambiaFotoPageModule)
  },
  {
    path: 'profilo-modifica-dati',
    loadChildren: () => import('./profilo-modifica-dati/profilo-modifica-dati.module').then( m => m.ProfiloModificaDatiPageModule)
  },
  {
    path: 'profilo-modifica-residenza',
    loadChildren: () => import('./profilo-modifica-residenza/profilo-modifica-residenza.module').then( m => m.ProfiloModificaResidenzaPageModule)
  },
  {
    path: 'profilo-modifica-password',
    loadChildren: () => import('./profilo-modifica-password/profilo-modifica-password.module').then( m => m.ProfiloModificaPasswordPageModule)
  },
  {
    path: 'profilo-modifica-curriculum',
    loadChildren: () => import('./profilo-modifica-curriculum/profilo-modifica-curriculum.module').then( m => m.ProfiloModificaCurriculumPageModule)
  },
  {
    path: 'dettagli-candidato',
    loadChildren: () => import('./dettagli-candidato/dettagli-candidato.module').then( m => m.DettagliCandidatoPageModule)
  },
  {
    path: 'stato-candidature-offerte',
    loadChildren: () => import('./stato-candidature-offerte/stato-candidature-offerte.module').then( m => m.StatoCandidatureOffertePageModule)
  },
  {
    path: 'stato-candidature-richieste',
    loadChildren: () => import('./stato-candidature-richieste/stato-candidature-richieste.module').then( m => m.StatoCandidatureRichiestePageModule)
  },
  {
    path: 'dettagli-candidature',
    loadChildren: () => import('./dettagli-candidature/dettagli-candidature.module').then( m => m.DettagliCandidaturePageModule)
  },
  {
    path: 'ricerca-attivita-richieste',
    loadChildren: () => import('./ricerca-attivita-richieste/ricerca-attivita-richieste.module').then( m => m.RicercaAttivitaRichiestePageModule)
  },
  {
    path: 'ricerca-attivita-offerte',
    loadChildren: () => import('./ricerca-attivita-offerte/ricerca-attivita-offerte.module').then( m => m.RicercaAttivitaOffertePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
