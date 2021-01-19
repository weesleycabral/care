import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  power = false;
  toggle = true;
  nome: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private menu: MenuController
    ) { }

  ngOnInit() {
    this.menu.enable(true);
    this.load();
    console.log(this.nome);
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

  ligar() {
    this.toggle = !this.toggle;
 }

 load() {
  const data = localStorage.getItem('nome');
  this.nome = JSON.parse(data);
}

}
