import { Component,Injectable, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { AlertController } from '../../../node_modules/@ionic/angular';
import { NavController } from '@ionic/angular';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-stato-candidature-richieste',
  templateUrl: './stato-candidature-richieste.page.html',
  styleUrls: ['./stato-candidature-richieste.page.scss'],
})
export class StatoCandidatureRichiestePage implements OnInit {
  public currentUser: any = null;
  public elencoAttivita: any = null;
  public idUtuente;
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

    caricaElencoCandidati(){

      this.apiService.visualizzaStatoCandidature(JSON.parse(JSON.stringify({tipo:'r',id_utente:this.idUtuente}))).subscribe((data)=>{
        this.elencoAttivita = data['records'];
        });
    }

}
