import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListenPage } from './listen';

@NgModule({
  declarations: [
    ListenPage,
  ],
  imports: [
    IonicPageModule.forChild(ListenPage),
  ],
})
export class ListenPageModule {}
