import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-portafoglio-acquista',
  templateUrl: './portafoglio-acquista.page.html',
  styleUrls: ['./portafoglio-acquista.page.scss'],
})
export class PortafoglioAcquistaPage implements OnInit {


  public currentUser: any=null;


  constructor(public navCtrl: NavController,
              public route: ActivatedRoute) { }

  ngOnInit() {
    this.currentUser=JSON.parse(localStorage.getItem('utente'));
  }
}
