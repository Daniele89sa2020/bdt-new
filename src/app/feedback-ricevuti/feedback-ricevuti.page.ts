import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-feedback-ricevuti',
  templateUrl: './feedback-ricevuti.page.html',
  styleUrls: ['./feedback-ricevuti.page.scss'],
})
export class FeedbackRicevutiPage implements OnInit {


  public currentUser: any=null;


  constructor(public navCtrl: NavController,
              public route: ActivatedRoute) { }

  ngOnInit() {
    this.currentUser=JSON.parse(localStorage.getItem('utente'));
  }

}
