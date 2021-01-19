import { Component, OnInit } from '@angular/core';

import { AlertController, Platform, ToastController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  nome: string;
  public appPages = [
    {
      title: 'Home',
      url: '/folder/Inbox',
      icon: 'home'
    },
    {
      title: 'Configurações',
      url: '',
      icon: 'construct'
    }
  ];
  // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private alertController: AlertController,
    private router: Router,
    private toastController: ToastController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    this.load();
    console.log(this.nome);
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }

  async alertLogout() {
    const alert = await this.alertController.create({
      header: 'PPA Care!',
      message: 'Deseja encerrar sua sessão?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: (blah) => {
          }
        }, {
          text: 'Sim',
          handler: () => {
            this.logout();
          }
        }
      ]
    });

    await alert.present();
  }

  logout() {
    this.router.navigate(['/login']);
    this.presentToast('Desconectado com sucesso! Volte sempre! :D', 'success');
    // localStorage.clear();
  }

  async presentToast(m: string, c: string) {
    const toast = await this.toastController.create({
      message: `${m}`,
      color: `${c}`,
      duration: 2000,
      position: 'top'
    });
    toast.present();
  }

  load() {
    const data = localStorage.getItem('nome');
    this.nome = JSON.parse(data);
  }
}
