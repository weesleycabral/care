import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuController, ModalController } from '@ionic/angular';
import { AfterPage } from '../modal/after/after.page';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  name = new FormControl;
  nome: string;

  constructor(
    private fb: FormBuilder,
    private route: Router,
    private modalController: ModalController,
    private menu: MenuController
  ) { 
    
  }

  ngOnInit() {
    // this.menu.enable(false);
    this.validation();
    this.load();
    console.log(this.nome)
  }

  validation() {
    this.loginForm = this.fb.group({
      login: ['', Validators.required]
    })
  }

  login() {
      this.presentModal();
      this.route.navigate(['folder/inbox'])
      this.save();
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: AfterPage,
    });
    return await modal.present();
  }

  save() {
    const data = JSON.stringify(this.name.value);
    localStorage.setItem('nome', data);
  }

  load() {
    const data = localStorage.getItem('nome');
    this.nome = JSON.parse(data);
  }

  
 

 
}
