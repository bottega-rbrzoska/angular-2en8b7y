import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyTestComponent } from './test/my-test/my-test.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductItemComponent } from './products/product-item/product-item.component';
import { ProductAddComponent } from './products/product-add/product-add.component';
import { ProductFormComponent } from './products/product-form/product-form.component';
import { ProductEditComponent } from './products/product-edit/product-edit.component';
import { TestChildComponent } from './test/test-child/test-child.component';

@NgModule({
  declarations: [
    AppComponent,
    MyTestComponent,
    ContactComponent,
    HomeComponent,
    NavigationComponent,
    ProductListComponent,
    ProductItemComponent,
    ProductAddComponent,
    ProductFormComponent,
    ProductEditComponent,
    TestChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
