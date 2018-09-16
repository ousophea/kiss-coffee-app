import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReorderItemPage } from './reorder-item';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    ReorderItemPage,
  ],
  imports: [
    TranslateModule,IonicPageModule.forChild(ReorderItemPage),
  ],
})
export class ReorderItemPageModule {}
