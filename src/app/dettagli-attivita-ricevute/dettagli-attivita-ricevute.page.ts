import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-dettagli-attivita-ricevute',
  templateUrl: './dettagli-attivita-ricevute.page.html',
  styleUrls: ['./dettagli-attivita-ricevute.page.scss'],
})
export class DettagliAttivitaRicevutePage implements OnInit {

  public currentUser: any=null;


  constructor(public navCtrl: NavController,
              public route: ActivatedRoute) { }

  ngOnInit() {
    this.currentUser=JSON.parse(localStorage.getItem('utente'));
  }
}
