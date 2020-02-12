import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-dettagli-ricerca',
  templateUrl: './dettagli-ricerca.page.html',
  styleUrls: ['./dettagli-ricerca.page.scss'],
})
export class DettagliRicercaPage implements OnInit {

  public currentUser: any=null;


  constructor(public navCtrl: NavController,
              public route: ActivatedRoute) { }

  ngOnInit() {
    this.currentUser=JSON.parse(localStorage.getItem('utente'));
  }

}
