import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from "@angular/flex-layout";
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from "@angular/common";


@NgModule({
    imports: [MaterialModule, BrowserAnimationsModule, FlexLayoutModule, BrowserModule, CommonModule], 
    exports: [MaterialModule, BrowserAnimationsModule, FlexLayoutModule, BrowserModule, CommonModule], 
    providers: [], 
    declarations: []
})

export class SharedModule { }