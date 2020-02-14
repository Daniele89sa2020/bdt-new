import { Component,Injectable, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { AlertController } from '../../../node_modules/@ionic/angular';
import { NavController } from '@ionic/angular';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-attivita-new-offerte',
  templateUrl: './attivita-new-offerte.page.html',
  styleUrls: ['./attivita-new-offerte.page.scss'],
})
export class AttivitaNewOffertePage implements OnInit {
  
 
  public currentUser: any=null;
  public attivitaOfferte: any=null;

  constructor(
    private apiService: ApiService,
    public alertCtrl: AlertController,
    public navCtrl: NavController,
    private activatedRoute: ActivatedRoute,
    private router: Router) {}

    ngOnInit() {
      this.currentUser=JSON.parse(localStorage.getItem('utente'));
      this.caricaAttivitaOfferte();
    }
  
    caricaAttivitaOfferte(){

      this.apiService.caricaAttivitaOfferteCreate(this.currentUser).subscribe((data)=>{
        this.attivitaOfferte = data['records'];
        });
      }
    
    //FUNCTION NAVIGATION_____________________________________________________
    goToElencoCandidati(idAttivita){
      let navigationExtras: NavigationExtras = {
        queryParams: {
          id:idAttivita
        }
      };
      this.navCtrl.navigateForward(['/elenco-candidati'], navigationExtras);
    }
  
}
