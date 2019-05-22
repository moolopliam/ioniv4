import { Component } from '@angular/core';
import { APIService } from "../services/api.service";
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  todo = {};
  constructor(private apiSV: APIService, private alertController: AlertController) {

  }

  ngOnInit() {
    this.todo = this.apiSV.tmp;
    console.log(this.apiSV.tmp);
  }
  
  async presentAlert(mag: string) {
    const alert = await this.alertController.create({
      header: 'แจ้งเตือน',
      message: mag,
      buttons: ['ปิด']
    });

    await alert.present();
  }
  
  add(form) {
    console.log(form.value);

    this.apiSV.Update(this.todo).subscribe((res) => {
      console.log(res)
      if (res == "ok") {
        this.presentAlert("แก้ไขข้อมูลเรียบร้อย");
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
