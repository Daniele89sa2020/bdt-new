import { Component,Injectable, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { AlertController } from '../../../node_modules/@ionic/angular';
import { NavController } from '@ionic/angular';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-profilo-modifica-dati',
  templateUrl: './profilo-modifica-dati.page.html',
  styleUrls: ['./profilo-modifica-dati.page.scss'],
})

export class ProfiloModificaDatiPage implements OnInit {
  
  public currentUser: any=null;
  public mess:String;


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

  
  //SUBMIT METOD
  ionModificaDatiProfilo(value){

    this.apiService.modificaDatiProfilo(value,this.currentUser.id).subscribe((data)=>{

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
              
              //Aggiorno  variabili sessione utente
              let utente: any = { 
                  id: data['id'],
                  nome: data['nome'],
                  cognome: data['cognome'],
                  data_nascita: data['data_nascita'],
                  email: data['email'],
                  password: data['password'],
                  telefono: data['tel'],
                  sesso: data['sesso'],
                  titolo_studio: data['titolo_studio'],
                  esperienze_lavorative: data['esperienze_lavorative'],
                  conoscenze_linguistiche: data['conoscenze_linguistiche'],
                  competenze: data['competenze'],
                  indirizzo: data['indirizzo'],
                  cap: data['cap'],
                  citta: data['citta'],
                  provincia: data['provincia'],
                  regione: data['regione'],
                  nazione: data['nazione'],
                  saldo_tempo: data['saldo_tempo']/60
                };

              localStorage.setItem('utente',JSON.stringify(utente));
           }
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

goToBack(){
  this.navCtrl.navigateBack(['/profilo-anagrafica']);
}

}
