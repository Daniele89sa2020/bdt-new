import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-profilo-modifica-curriculum',
  templateUrl: './profilo-modifica-curriculum.page.html',
  styleUrls: ['./profilo-modifica-curriculum.page.scss'],
})
export class ProfiloModificaCurriculumPage implements OnInit {


  public currentUser: any=null;


  constructor(public navCtrl: NavController,
              public route: ActivatedRoute) { }

  ngOnInit() {
    this.currentUser=JSON.parse(localStorage.getItem('utente'));
  }

}
