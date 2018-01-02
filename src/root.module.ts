import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { RootComponent } from './root.component';
import { RootRoutingModule } from './root-routing.module';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        RootRoutingModule,
    ],
    declarations: [RootComponent],
    providers: [],
    bootstrap: [RootComponent],
})
export class RootModule { }
