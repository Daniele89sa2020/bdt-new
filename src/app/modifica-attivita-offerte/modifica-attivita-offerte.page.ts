import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-modifica-attivita-offerte',
  templateUrl: './modifica-attivita-offerte.page.html',
  styleUrls: ['./modifica-attivita-offerte.page.scss'],
})
export class ModificaAttivitaOffertePage implements OnInit {


  public currentUser: any=null;


  constructor(public navCtrl: NavController,
              public route: ActivatedRoute) { }

  ngOnInit() {
    this.currentUser=JSON.parse(localStorage.getItem('utente'));
  }

}
