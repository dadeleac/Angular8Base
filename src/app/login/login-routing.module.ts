import { LoginComponent } from "./login.component";
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {path : 'login', component : LoginComponent}
]

@NgModule({
    imports: [RouterModule.forChild(routes)], 
    exports: [RouterModule]
})

export class LoginRoutingModule {
    static components = [LoginComponent]
}