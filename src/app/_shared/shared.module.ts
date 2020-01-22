import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from "@angular/flex-layout";
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    imports: [MaterialModule, BrowserAnimationsModule, FlexLayoutModule, BrowserModule], 
    exports: [MaterialModule, BrowserAnimationsModule, FlexLayoutModule, BrowserModule], 
    providers: []
})

export class SharedModule { }