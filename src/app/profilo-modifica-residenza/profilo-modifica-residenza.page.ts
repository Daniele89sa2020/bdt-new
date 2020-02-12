import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-profilo-modifica-residenza',
  templateUrl: './profilo-modifica-residenza.page.html',
  styleUrls: ['./profilo-modifica-residenza.page.scss'],
})
export class ProfiloModificaResidenzaPage implements OnInit {


  public currentUser: any=null;


  constructor(public navCtrl: NavController,
              public route: ActivatedRoute) { }

  ngOnInit() {
    this.currentUser=JSON.parse(localStorage.getItem('utente'));
  }
}
