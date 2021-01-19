import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
  selecionado;

  constructor() { }

  ngOnInit() {
  }

  changeSelected(event) {
    this.selecionado = event.tab;
  }

}
