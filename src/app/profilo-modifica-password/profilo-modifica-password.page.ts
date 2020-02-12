import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-profilo-modifica-password',
  templateUrl: './profilo-modifica-password.page.html',
  styleUrls: ['./profilo-modifica-password.page.scss'],
})
export class ProfiloModificaPasswordPage implements OnInit {


  public currentUser: any=null;


  constructor(public navCtrl: NavController,
              public route: ActivatedRoute) { }

  ngOnInit() {
    this.currentUser=JSON.parse(localStorage.getItem('utente'));
  }

}
