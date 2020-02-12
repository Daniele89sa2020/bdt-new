import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-attivita-new-offerte',
  templateUrl: './attivita-new-offerte.page.html',
  styleUrls: ['./attivita-new-offerte.page.scss'],
})
export class AttivitaNewOffertePage implements OnInit {
  
  public currentUser: any=null;


  constructor(public navCtrl: NavController,
              public route: ActivatedRoute) { }

  ngOnInit() {
    this.currentUser=JSON.parse(localStorage.getItem('utente'));
  }

}
