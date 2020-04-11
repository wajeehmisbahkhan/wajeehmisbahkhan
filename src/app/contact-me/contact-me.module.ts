import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactMePageRoutingModule } from './contact-me-routing.module';

import { ContactMePage } from './contact-me.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactMePageRoutingModule
  ],
  declarations: [ContactMePage]
})
export class ContactMePageModule {}
