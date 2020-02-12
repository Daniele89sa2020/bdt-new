import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-elenco-candidati-richieste',
  templateUrl: './elenco-candidati-richieste.page.html',
  styleUrls: ['./elenco-candidati-richieste.page.scss'],
})
export class ElencoCandidatiRichiestePage implements OnInit {

 
  public currentUser: any=null;


  constructor(public navCtrl: NavController,
              public route: ActivatedRoute) { }

  ngOnInit() {
    this.currentUser=JSON.parse(localStorage.getItem('utente'));
  }
  
}
