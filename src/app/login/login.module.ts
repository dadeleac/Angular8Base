import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { SharedModule } from '../_shared/shared.module';

@NgModule({
    declarations: [LoginComponent],
    imports: [ReactiveFormsModule, LoginRoutingModule, SharedModule, FormsModule],
    exports: [LoginRoutingModule.components]
})

export class LoginModule { }