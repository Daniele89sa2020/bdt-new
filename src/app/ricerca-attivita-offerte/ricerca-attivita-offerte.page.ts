import { Component,Injectable, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { AlertController } from '../../../node_modules/@ionic/angular';
import { NavController } from '@ionic/angular';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-ricerca-attivita-offerte',
  templateUrl: './ricerca-attivita-offerte.page.html',
  styleUrls: ['./ricerca-attivita-offerte.page.scss'],
})

export class RicercaAttivitaOffertePage implements OnInit {
  
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

  ngDoCheck(){
    this.currentUser=JSON.parse(localStorage.getItem('utente'));
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
  ionRicercaOfferte(value){
    this.apiService.ricercaAttivitaOfferte(value).subscribe((data)=>{
          this.listaAttivita = data['records']; 
    });
  }
  candidati(value){
    this.apiService.candidaUtentePerAttivita(JSON.parse(JSON.stringify({id_utente:this.currentUser.id, id_attivita:value}))).subscribe((data)=>{
  
      if (data['status']=="no"){     
                                 let messageNoLogin: any = {
                                                     header: data['header'],
                                                     message: data['message']
                                                    };
    
                                  this.alertMex(messageNoLogin);                           
                                }
         else{ 
              let messageNoLogin: any = {
                                         header: data['header'],
                                         message: data['message']
                                        };
  
              this.alertMex(messageNoLogin); 
              this.goToHome();
           }
    });
  }
}
