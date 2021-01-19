import { stringify } from '@angular/compiler/src/util';
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
  nome: string;

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
    this.load();
    setTimeout(() => {
      this.modalController.dismiss();
    }, 2700);
  }

  load() {
    const data = localStorage.getItem('nome');
    this.nome = JSON.parse(data);
  }

}
