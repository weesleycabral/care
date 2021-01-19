import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AfterPage } from './after.page';

const routes: Routes = [
  {
    path: '',
    component: AfterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AfterPageRoutingModule {}
