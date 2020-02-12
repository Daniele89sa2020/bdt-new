import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-dettagli-attivita-svolte',
  templateUrl: './dettagli-attivita-svolte.page.html',
  styleUrls: ['./dettagli-attivita-svolte.page.scss'],
})
export class DettagliAttivitaSvoltePage implements OnInit {

  
  public currentUser: any=null;


  constructor(public navCtrl: NavController,
              public route: ActivatedRoute) { }

  ngOnInit() {
    this.currentUser=JSON.parse(localStorage.getItem('utente'));
  }

}
