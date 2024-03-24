import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Map1Component } from './map1/map1.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { Dialog1Component } from './dialog1/dialog1.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';

import { LoadinglayerComponent } from './pages/loadinglayer/loadinglayer.component';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    Map1Component,
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
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      },
      defaultLanguage: 'pt'
  })
  ],
  providers: [Dialog1Component],
  bootstrap: [AppComponent]
})
export class AppModule { }
