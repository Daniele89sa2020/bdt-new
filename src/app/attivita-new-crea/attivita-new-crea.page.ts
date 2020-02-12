import { Component,Injectable, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { AlertController } from '../../../node_modules/@ionic/angular';
import { NavController } from '@ionic/angular';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-attivita-new-crea',
  templateUrl: './attivita-new-crea.page.html',
  styleUrls: ['./attivita-new-crea.page.scss'],
})
export class AttivitaNewCreaPage implements OnInit {

  
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

  selectType(s){
    (<HTMLInputElement>document.getElementById('tipo')).value=s;
  }

  ionCreaAttivita(value){
    value.id_utente=this.currentUser.id;
    this.apiService.creaAttivita(value).subscribe((data)=>{

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
