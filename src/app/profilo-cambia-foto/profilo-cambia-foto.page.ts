import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-profilo-cambia-foto',
  templateUrl: './profilo-cambia-foto.page.html',
  styleUrls: ['./profilo-cambia-foto.page.scss'],
})
export class ProfiloCambiaFotoPage implements OnInit {

 
  public currentUser: any=null;


  constructor(public navCtrl: NavController,
              public route: ActivatedRoute) { }

  ngOnInit() {
    this.currentUser=JSON.parse(localStorage.getItem('utente'));
  }
}
