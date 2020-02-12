import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Ricerca Attività',
      url: '/ricerca-attivita-offerte',
      icon: 'search'
    },
    {
      title: 'Attività Utente',
      url: '/attivita-new-offerte',
      icon: 'construct'
    },
    {
      title: 'Stato Candidature',
      url: '/stato-candidature-offerte',
      icon: 'people'
    },
    {
      title: 'Storico Attività',
      url: '/attivita-storico',
      icon: 'list'
    },
    {
      title: 'Premi e Partner',
      url: '/premi-prodotti',
      icon: 'basket'
    },
    {
      title: 'Profilo',
      url: '/profilo-anagrafica',
      icon: 'person'
    },
    {
      title: 'Feedback',
      url: '/feedback-inviati',
      icon: 'star'
    },
    {
      title: 'Portafoglio',
      url: '/portafoglio-saldo',
      icon: 'wallet'
    },
    {
      title: 'Informazioni',
      url: '/informazioni',
      icon: 'information'
    },
    {
      title: 'Esci',
      url: '/login',
      icon: 'log-out'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
