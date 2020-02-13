import { Component,Injectable, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { AlertController } from '../../../node_modules/@ionic/angular';
import { NavController } from '@ionic/angular';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-attivita-new-richieste',
  templateUrl: './attivita-new-richieste.page.html',
  styleUrls: ['./attivita-new-richieste.page.scss'],
})
export class AttivitaNewRichiestePage implements OnInit {

  public currentUser: any=null;
  public attivitaRichieste: any=null;

  constructor(
    private apiService: ApiService,
    public alertCtrl: AlertController,
    public navCtrl: NavController,
    private activatedRoute: ActivatedRoute,
    private router: Router) {}

    ngOnInit() {
      this.currentUser=JSON.parse(localStorage.getItem('utente'));
      this.caricaAttivitaRichieste();
    }
  
    caricaAttivitaRichieste(){

      this.apiService.caricaAttivitaRichiesteCreate(this.currentUser).subscribe((data)=>{
        this.attivitaRichieste = data['records'];
        });
      }
    
    
    //FUNCTION NAVIGATION_____________________________________________________
    goToElencoCandidati(idAttivita){
      let navigationExtras: NavigationExtras = {
        queryParams: {
          id:idAttivita,
        }
      };
      this.navCtrl.navigateForward(['/elenco-candidati-offerte'], navigationExtras);
    }

  
}
