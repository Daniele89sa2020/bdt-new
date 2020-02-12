import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-modifica-attivita-richieste',
  templateUrl: './modifica-attivita-richieste.page.html',
  styleUrls: ['./modifica-attivita-richieste.page.scss'],
})
export class ModificaAttivitaRichiestePage implements OnInit {


  public currentUser: any=null;


  constructor(public navCtrl: NavController,
              public route: ActivatedRoute) { }

  ngOnInit() {
    this.currentUser=JSON.parse(localStorage.getItem('utente'));
  }

}
