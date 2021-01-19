import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AfterPageRoutingModule } from './after-routing.module';

import { AfterPage } from './after.page';
import { LottieAnimationViewModule } from 'ng-lottie';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LottieAnimationViewModule,
    AfterPageRoutingModule
  ],
  declarations: [AfterPage]
})
export class AfterPageModule {}
