import { Component } from '@angular/core';
import { APIService } from "../services/api.service";
import { Subscription } from 'rxjs';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  Subscription: Subscription;
  List: any = [];
  constructor(private apiSV: APIService, private alertController: AlertController,private route :Router) {
    this.ShowValue();
  }


  async presentAlertConfirm(id) {
    const alert = await this.alertController.create({
      header: 'แจ้งตืน!',
      message: 'คุณจะลบหรือไม่!!!',
      buttons: [
        {
          text: 'ยกเลิก',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'ตกลง',
          handler: () => {
            console.log('Confirm Okay');
            this.deldata(id);
          }
        }
      ]
    });

    await alert.present();
  }

  ShowValue() {
    this.Subscription = this.apiSV.GetDataAPI().subscribe(
      data => {
        this.List = data['data'];
      })
  }
  deldata(id) {
    console.log(id)
    this.apiSV.DelData(id).subscribe((res) => {
      this.ShowValue();
      console.log(res)
    },
      err => {
        console.log("error");

      });
  }

  Edit(article) {
    this.apiSV.tmp = article;
    this.route.navigate(['tab3']);
  }


}
