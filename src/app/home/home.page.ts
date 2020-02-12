import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {


  public currentUser: any=null;


  constructor(public navCtrl: NavController,
              public route: ActivatedRoute) {}


  ngOnInit() {
    this.currentUser=JSON.parse(localStorage.getItem('utente'));


    /*this.route.queryParams.subscribe(async params => {
      this.utente.nome = params["nome"];
      this.utente.cognome = params["cognome"];
    });*/
  }

}