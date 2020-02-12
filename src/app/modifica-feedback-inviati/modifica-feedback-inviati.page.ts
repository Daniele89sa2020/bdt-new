import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-modifica-feedback-inviati',
  templateUrl: './modifica-feedback-inviati.page.html',
  styleUrls: ['./modifica-feedback-inviati.page.scss'],
})
export class ModificaFeedbackInviatiPage implements OnInit {


  public currentUser: any=null;


  constructor(public navCtrl: NavController,
              public route: ActivatedRoute) { }

  ngOnInit() {
    this.currentUser=JSON.parse(localStorage.getItem('utente'));
  }

}
