import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Mf1HomeComponent } from './mf1-home/mf1-home.component';

const routes: Routes = [
  {
    path: '',
    component: Mf1HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
