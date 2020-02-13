import { Component,Injectable, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { AlertController } from '../../../node_modules/@ionic/angular';
import { NavController } from '@ionic/angular';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-elenco-candidati-offerte',
  templateUrl: './elenco-candidati-offerte.page.html',
  styleUrls: ['./elenco-candidati-offerte.page.scss'],
})
export class ElencoCandidatiOffertePage implements OnInit {


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
      this.caricaElencoCandidati();
      this.activatedRoute.queryParams.subscribe(async params => {
        this.idAttivita = params["id"];
        alert(params["id"]);
      });
      this.caricaElencoCandidati();
    }
  
    caricaElencoCandidati(){

      this.apiService.caricaUtentiCandidatiPerAttivita(JSON.stringify({id_attivita:""+this.idAttivita})).subscribe((data)=>{
        this.elencoCandidati = data['records'];
  
          /*if (data['status']=="no"){     
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
              }*/
        });
      }
    
  

  
}
