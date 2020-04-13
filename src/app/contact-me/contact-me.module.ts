import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactMePageRoutingModule } from './contact-me-routing.module';

import { ContactMePage } from './contact-me.page';
import { ComponentModule } from '../components/component.module';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactMePageRoutingModule,
    ComponentModule,
    AgmCoreModule
  ],
  declarations: [ContactMePage]
})
export class ContactMePageModule {}
