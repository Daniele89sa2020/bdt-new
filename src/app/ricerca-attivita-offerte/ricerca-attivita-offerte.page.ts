import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-ricerca-attivita-offerte',
  templateUrl: './ricerca-attivita-offerte.page.html',
  styleUrls: ['./ricerca-attivita-offerte.page.scss'],
})
export class RicercaAttivitaOffertePage implements OnInit {

 
  public currentUser: any=null;


  constructor(public navCtrl: NavController,
              public route: ActivatedRoute) { }

  ngOnInit() {
    this.currentUser=JSON.parse(localStorage.getItem('utente'));
  }
}
