import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-attivita-new-crea',
  templateUrl: './attivita-new-crea.page.html',
  styleUrls: ['./attivita-new-crea.page.scss'],
})
export class AttivitaNewCreaPage implements OnInit {

  
  public currentUser: any=null;


  constructor(public navCtrl: NavController,
              public route: ActivatedRoute) { }

  ngOnInit() {
    this.currentUser=JSON.parse(localStorage.getItem('utente'));
  }

  selectTipe(s){
    //(<HTMLInputElement>document.getElementById('tipo')).value=s;
  }

  ionCreaAttivita(value,id){
  }
}
