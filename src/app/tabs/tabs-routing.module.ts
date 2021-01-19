import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FolderPageModule } from '../folder/folder.module';

import { TabsPage } from './tabs.page'; 

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'folder/inbox',
        children: [
          {
            path: '',
            loadChildren: () => import('../folder/folder.module').then( m => m.FolderPageModule)
          }
        ]
      },
      {
        path: 'configuracoes',
        children: [
          {
            path: '',
          }
        ]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
