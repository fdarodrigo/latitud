import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Map1Component } from './map1/map1.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { Dialog1Component } from './dialogs/dialog1/dialog1.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';


import { Map2Component } from './map2/map2.component';
import { Dialog2Component } from './dialogs/dialog2/dialog2.component';
import { LoadinglayerComponent } from './pages/loadinglayer/loadinglayer.component';



@NgModule({
  declarations: [
    AppComponent,
    Map1Component,
    Map2Component,
    LoadinglayerComponent,
    //Dialog2Component,
    //Dialog1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleMapsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatSelectModule,
    MatCardModule,
    Dialog1Component,
    Dialog2Component,
    HttpClientModule,
  ],
  providers: [Dialog1Component, Dialog2Component],
  bootstrap: [AppComponent]
})
export class AppModule { }
