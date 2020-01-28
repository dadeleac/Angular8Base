import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../_shared/material/material.module';
import { EnsureModuleLoadOnceGuard } from './guards/ensure-module-load-once.guard';
import { SkipSelf, Optional, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { ApplicationInsightsService } from './logger/appinsights.service';

@NgModule({
    imports: [RouterModule, HttpClientModule,
        FormsModule], 
    exports: [RouterModule, HttpClientModule,
        FormsModule, ], 
    providers: [AuthService, ApplicationInsightsService]
})

export class CoreModule extends EnsureModuleLoadOnceGuard{
    constructor(@Optional() @SkipSelf() parentModule: CoreModule){
        super(parentModule); 
    }
    
}
