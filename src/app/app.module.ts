import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './_core/core.module';
import { LoginModule } from './login/login.module';
import { SharedModule } from './_shared/shared.module';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { HomeLayoutComponent } from './_core/layout/home.layout.component';
import { LoginLayoutComponent } from './_core/layout/login.layout.component';
import { SpeedDialFabComponent } from './_core/speed-dial-fab/speed-dial-fab.component';
import { SidenavComponent } from './_nav/sidenav.component';


@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    HomeComponent,
    AdminComponent, 
    HomeLayoutComponent, 
    LoginLayoutComponent,
    SpeedDialFabComponent
  ],
  imports: [
    BrowserModule,
    LoginModule,
    AppRoutingModule,
    CoreModule,
    SharedModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
