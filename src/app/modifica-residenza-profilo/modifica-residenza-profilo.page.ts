import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-modifica-residenza-profilo',
  templateUrl: './modifica-residenza-profilo.page.html',
  styleUrls: ['./modifica-residenza-profilo.page.scss'],
})
export class ModificaResidenzaProfiloPage implements OnInit {


  public currentUser: any=null;


  constructor(public navCtrl: NavController,
              public route: ActivatedRoute) { }

  ngOnInit() {
    this.currentUser=JSON.parse(localStorage.getItem('utente'));
  }
}
