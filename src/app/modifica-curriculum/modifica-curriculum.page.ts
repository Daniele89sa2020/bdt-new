import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-modifica-curriculum',
  templateUrl: './modifica-curriculum.page.html',
  styleUrls: ['./modifica-curriculum.page.scss'],
})
export class ModificaCurriculumPage implements OnInit {

 
  public currentUser: any=null;


  constructor(public navCtrl: NavController,
              public route: ActivatedRoute) { }

  ngOnInit() {
    this.currentUser=JSON.parse(localStorage.getItem('utente'));
  }

}
