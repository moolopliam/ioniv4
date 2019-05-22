import { Component, OnInit } from '@angular/core';
import { APIService } from "../services/api.service";
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page  {

  todo = {};
  constructor(private apiSV: APIService, private alertController: AlertController) {

  }


  async presentAlert(mag: string) {
    const alert = await this.alertController.create({
      header: 'แจ้งเตือน',
      message: mag,
      buttons: ['ปิด']
    });

    await alert.present();
  }

  logForm() {
    this.apiSV.SaveData(this.todo).subscribe((res) => {
      console.log(this.todo);
      console.log(res)
      if (res == "ok") {
        this.presentAlert("บันทึกข้อมูลเรียบร้อย");
      }
      else {
        this.presentAlert("เกิดข้อผิดพลาด");
      }
    },
      err => {
        console.log("error");
        this.presentAlert("เกิดข้อผิดพลาด");

      }
    );
  }
}
