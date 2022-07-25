import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyTestComponent } from './my-test/my-test.component';

const routes: Routes = [
  { path: 'test', component: MyTestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
