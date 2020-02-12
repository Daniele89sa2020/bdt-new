import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-informativa-privacy',
  templateUrl: './informativa-privacy.page.html',
  styleUrls: ['./informativa-privacy.page.scss'],
})
export class InformativaPrivacyPage implements OnInit {

 
  public currentUser: any=null;


  constructor(public navCtrl: NavController,
              public route: ActivatedRoute) { }

  ngOnInit() {
    this.currentUser=JSON.parse(localStorage.getItem('utente'));
  }

}
