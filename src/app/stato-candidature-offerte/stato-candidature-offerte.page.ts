import { Component,Injectable, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { AlertController } from '../../../node_modules/@ionic/angular';
import { NavController } from '@ionic/angular';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-stato-candidature-offerte',
  templateUrl: './stato-candidature-offerte.page.html',
  styleUrls: ['./stato-candidature-offerte.page.scss'],
})

export class StatoCandidatureOffertePage implements OnInit {

  public currentUser: any = null;
  public elencoAttivita: any = null;
  public idUtuente;
  public mess:String;

  constructor(
    private apiService: ApiService,
    public alertCtrl: AlertController,
    public navCtrl: NavController,
    private activatedRoute: ActivatedRoute,
    private router: Router) {}

    ngOnInit() {
      this.currentUser = JSON.parse(localStorage.getItem('utente'));
      this.idUtuente = this.currentUser.id;
      this.caricaElencoCandidati();
    }


    ngDoCheck(){
      this.currentUser=JSON.parse(localStorage.getItem('utente'));
      this.idUtuente = this.currentUser.id;
      this.caricaElencoCandidati();
    }

    caricaElencoCandidati(){
      this.apiService.visualizzaStatoCandidature(JSON.parse(JSON.stringify({tipo:'o',id_utente:this.idUtuente}))).subscribe((data)=>{
        this.elencoAttivita = data['records'];
        });
    }


//ALERT
async alertMex(forTask) {
  const alert = await this.alertCtrl.create({
      header: forTask.header,
      message: forTask.message,
      buttons: [{text: 'ok',},]
  });
  await alert.present();
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
 
}
