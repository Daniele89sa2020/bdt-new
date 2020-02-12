import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-portafoglio-saldo',
  templateUrl: './portafoglio-saldo.page.html',
  styleUrls: ['./portafoglio-saldo.page.scss'],
})
export class PortafoglioSaldoPage implements OnInit {


  public currentUser: any=null;


  constructor(public navCtrl: NavController,
              public route: ActivatedRoute) { }

  ngOnInit() {
    this.currentUser=JSON.parse(localStorage.getItem('utente'));
  }
}
