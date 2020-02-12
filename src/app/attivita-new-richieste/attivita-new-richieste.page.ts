import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-attivita-new-richieste',
  templateUrl: './attivita-new-richieste.page.html',
  styleUrls: ['./attivita-new-richieste.page.scss'],
})
export class AttivitaNewRichiestePage implements OnInit {

  
  public currentUser: any=null;


  constructor(public navCtrl: NavController,
              public route: ActivatedRoute) { }

  ngOnInit() {
    this.currentUser=JSON.parse(localStorage.getItem('utente'));
  }

}
