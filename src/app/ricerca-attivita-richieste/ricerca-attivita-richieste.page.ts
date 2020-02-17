import { Component,Injectable, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { AlertController } from '../../../node_modules/@ionic/angular';
import { NavController } from '@ionic/angular';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-ricerca-attivita-richieste',
  templateUrl: './ricerca-attivita-richieste.page.html',
  styleUrls: ['./ricerca-attivita-richieste.page.scss'],
})

export class RicercaAttivitaRichiestePage implements OnInit {
  
  public currentUser: any=null;
  public mess:String;
  listaAttivita:any;


  constructor(
    private apiService: ApiService,
    public alertCtrl: AlertController,
    public navCtrl: NavController,
    private activatedRoute: ActivatedRoute,
    private router: Router) {}



  ngOnInit() {
    this.currentUser=JSON.parse(localStorage.getItem('utente'));
  }

  ngDoCheck(value){
    this.currentUser=JSON.parse(localStorage.getItem('utente'));
   
     //this.ionRicercaRichieste(value);
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


 //FUNCTION RICERCA
 
 ionRicercaRichieste(value){

  this.apiService.ricercaAttivitaRichieste(value).subscribe((data)=>{
        this.listaAttivita = data['records']; 
  });
}
 

}
