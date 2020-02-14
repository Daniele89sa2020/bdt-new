import { Component,Injectable, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { AlertController } from '../../../node_modules/@ionic/angular';
import { NavController } from '@ionic/angular';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';


@Component({
  selector: 'app-elenco-candidati',
  templateUrl: './elenco-candidati.page.html',
  styleUrls: ['./elenco-candidati.page.scss'],
})
export class ElencoCandidatiPage implements OnInit {
  public currentUser: any=null;
  public elencoCandidati: any=null;
  public idAttivita;
  constructor(
    private apiService: ApiService,
    public alertCtrl: AlertController,
    public navCtrl: NavController,
    private activatedRoute: ActivatedRoute,
    private router: Router) {}

    ngOnInit() {
      this.currentUser=JSON.parse(localStorage.getItem('utente'));
      this.activatedRoute.queryParams.subscribe(async params => {
        this.idAttivita = params["id"];
      });
      this.caricaElencoCandidati();
    }
  
    caricaElencoCandidati(){

      this.apiService.caricaUtentiCandidatiPerAttivita(JSON.parse(JSON.stringify({id_attivita:this.idAttivita}))).subscribe((data)=>{
        this.elencoCandidati = data['records'];
        });
      }
    
    accettaCandidato(idCandidatura){
      alert("sono qua "+idCandidatura);
      this.apiService.cambiaStatoCandidatura(JSON.parse(JSON.stringify({id_candidatura:idCandidatura, stato:'accettato'}))).subscribe((data)=>{
  
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
              }
        });
    }  

    rifiutaCandidato(idCandidatura){
    
      this.apiService.cambiaStatoCandidatura(JSON.parse(JSON.stringify({id_candidatura:idCandidatura, stato:'rifiutato'}))).subscribe((data)=>{
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
}
