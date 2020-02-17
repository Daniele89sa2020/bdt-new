import { Component,Injectable, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { AlertController } from '../../../node_modules/@ionic/angular';
import { NavController } from '@ionic/angular';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.page.html',
  styleUrls: ['./registrazione.page.scss'],
})

export class RegistrazionePage implements OnInit {

  data: Object;
  utente:any;
  
  constructor(
              private apiService: ApiService,
              public alertCtrl: AlertController,
              public navCtrl: NavController,
              private activatedRoute: ActivatedRoute,
              private router: Router) {}
  
  ngOnInit() {}


  ionRegistration(value){

    this.apiService.registrazione(value).subscribe((data)=>{

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
              this.navCtrl.navigateRoot(['/login']);             
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
