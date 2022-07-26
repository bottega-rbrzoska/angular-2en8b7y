import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SharedModule } from './shared/shared.module';
import { MyTestComponent } from './test/my-test/my-test.component';
import { TestChildComponent } from './test/test-child/test-child.component';
import { TestIfDirective } from './test/test-if.directive';

@NgModule({
  declarations: [
    AppComponent,
    MyTestComponent,
    ContactComponent,
    HomeComponent,
    NavigationComponent,
    TestChildComponent,
    PageNotFoundComponent
  ],
  imports: [BrowserModule, AppRoutingModule, CoreModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
