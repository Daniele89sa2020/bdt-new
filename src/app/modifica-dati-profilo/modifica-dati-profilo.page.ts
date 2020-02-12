import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-modifica-dati-profilo',
  templateUrl: './modifica-dati-profilo.page.html',
  styleUrls: ['./modifica-dati-profilo.page.scss'],
})
export class ModificaDatiProfiloPage implements OnInit {


  public currentUser: any=null;


  constructor(public navCtrl: NavController,
              public route: ActivatedRoute) { }

  ngOnInit() {
    this.currentUser=JSON.parse(localStorage.getItem('utente'));
  }

}
