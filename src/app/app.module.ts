import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './_core/core.module';
import { LoginModule } from './login/login.module';
import { SharedModule } from './_shared/shared.module';
import { SidenavComponent } from './_nav/sidenav/sidenav.component';
import { SideNavModule } from './_nav/sidenav/sidenav.module';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';


@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    HomeComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    LoginModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    SideNavModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
