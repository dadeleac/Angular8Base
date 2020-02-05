import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { EnsureModuleLoadOnceGuard } from './guards/ensure-module-load-once.guard';
import { SkipSelf, Optional, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { ApplicationInsightsService } from './logger/appinsights.service';
import { CookieService } from 'ngx-cookie-service'; 
import { MessageSnackBarService } from './snackbar/message-snackbar.service';

@NgModule({
    imports: [RouterModule, HttpClientModule,
        FormsModule], 
    exports: [RouterModule, HttpClientModule,
        FormsModule, ], 
    providers: [AuthService, ApplicationInsightsService, 
        CookieService, MessageSnackBarService], 
    declarations: []
})

export class CoreModule extends EnsureModuleLoadOnceGuard{
    constructor(@Optional() @SkipSelf() parentModule: CoreModule){
        super(parentModule); 
    }
    
}
