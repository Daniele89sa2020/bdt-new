import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-elenco-candidati-offerte',
  templateUrl: './elenco-candidati-offerte.page.html',
  styleUrls: ['./elenco-candidati-offerte.page.scss'],
})
export class ElencoCandidatiOffertePage implements OnInit {


  public currentUser: any=null;


  constructor(public navCtrl: NavController,
              public route: ActivatedRoute) { }

  ngOnInit() {
    this.currentUser=JSON.parse(localStorage.getItem('utente'));
  }
}
