import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-segnalazioni-assistenza',
  templateUrl: './segnalazioni-assistenza.page.html',
  styleUrls: ['./segnalazioni-assistenza.page.scss'],
})
export class SegnalazioniAssistenzaPage implements OnInit {


  public currentUser: any=null;


  constructor(public navCtrl: NavController,
              public route: ActivatedRoute) { }

  ngOnInit() {
    this.currentUser=JSON.parse(localStorage.getItem('utente'));
  }
}
