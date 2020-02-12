import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-dettagli-candidato',
  templateUrl: './dettagli-candidato.page.html',
  styleUrls: ['./dettagli-candidato.page.scss'],
})
export class DettagliCandidatoPage implements OnInit {

  public currentUser: any=null;


  constructor(public navCtrl: NavController,
              public route: ActivatedRoute) { }

  ngOnInit() {
    this.currentUser=JSON.parse(localStorage.getItem('utente'));
  }

}
