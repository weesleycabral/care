import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LottieAnimationViewModule } from 'ng-lottie';

@Component({
  selector: 'app-after',
  templateUrl: './after.page.html',
  styleUrls: ['./after.page.scss'],
})
export class AfterPage implements OnInit {

  lottieConfig: any;

  constructor(
    private modalController: ModalController
  ) {
    LottieAnimationViewModule.forRoot();

    this.lottieConfig =  {
      path: 'assets/loading.json',
      autoplay: true,
      loop: true
    };
   }

  ngOnInit() {
    setTimeout(() => {
      this.modalController.dismiss();
    }, 2700);
  }

}
