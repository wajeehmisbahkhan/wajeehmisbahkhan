import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactMePage } from './contact-me.page';

const routes: Routes = [
  {
    path: '',
    component: ContactMePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactMePageRoutingModule {}
