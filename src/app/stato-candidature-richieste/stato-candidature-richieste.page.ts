import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-stato-candidature-richieste',
  templateUrl: './stato-candidature-richieste.page.html',
  styleUrls: ['./stato-candidature-richieste.page.scss'],
})
export class StatoCandidatureRichiestePage implements OnInit {


  public currentUser: any=null;


  constructor(public navCtrl: NavController,
              public route: ActivatedRoute) { }

  ngOnInit() {
    this.currentUser=JSON.parse(localStorage.getItem('utente'));
  }

}
