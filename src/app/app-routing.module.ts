import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MyTestComponent } from './test/my-test/my-test.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'test', component: MyTestComponent },
  { path: 'products', loadChildren: () => import('./products/products.module').then((m) => m.ProductsModule) },
  { path: 'standalone', loadComponent: () => import('./standalone/standalone.component').then((m) => m.StandaloneComponent) },
  { path: 'mf1', loadChildren: () => import('mfe1/AppModule').then((m) => m.AppModule) },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      // preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
