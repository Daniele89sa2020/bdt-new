import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-profilo-anagrafica',
  templateUrl: './profilo-anagrafica.page.html',
  styleUrls: ['./profilo-anagrafica.page.scss'],
})
export class ProfiloAnagraficaPage implements OnInit {

  
  public currentUser: any=null;

  constructor(public navCtrl: NavController,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.currentUser=JSON.parse(localStorage.getItem('utente'));
  }

  ngDoCheck(){
    this.currentUser=JSON.parse(localStorage.getItem('utente'));
  }


  //FUNCTION NAVIGATION
  goToHome(){
    this.navCtrl.navigateRoot(['/home']);
  }
  
  goToProfilo(){
    this.navCtrl.navigateRoot(['/profilo-anagrafica']);
  }

  goToAttivita(){
    this.navCtrl.navigateRoot(['/attivita-new-offerte']);
  }

  goToRicerca(){
    this.navCtrl.navigateRoot(['/ricerca-attivita-offerte']);
  }

  goToProfiloCurriculum(){
    this.navCtrl.navigateForward(['/profilo-curriculum']);
  }

}
