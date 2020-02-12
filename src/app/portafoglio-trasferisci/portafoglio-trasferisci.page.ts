import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-portafoglio-trasferisci',
  templateUrl: './portafoglio-trasferisci.page.html',
  styleUrls: ['./portafoglio-trasferisci.page.scss'],
})
export class PortafoglioTrasferisciPage implements OnInit {

  public currentUser: any=null;


  constructor(public navCtrl: NavController,
              public route: ActivatedRoute) { }

  ngOnInit() {
    this.currentUser=JSON.parse(localStorage.getItem('utente'));
  }

}
