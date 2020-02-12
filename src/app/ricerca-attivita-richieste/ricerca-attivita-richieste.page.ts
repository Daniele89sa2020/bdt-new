import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-ricerca-attivita-richieste',
  templateUrl: './ricerca-attivita-richieste.page.html',
  styleUrls: ['./ricerca-attivita-richieste.page.scss'],
})
export class RicercaAttivitaRichiestePage implements OnInit {


  public currentUser: any=null;


  constructor(public navCtrl: NavController,
              public route: ActivatedRoute) { }

  ngOnInit() {
    this.currentUser=JSON.parse(localStorage.getItem('utente'));
  }

}
