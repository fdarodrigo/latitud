import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Map1Component } from './map1/map1.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { DialogInfoComponent } from './dialogs/dialog-info/dialog1.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';

import { LoadinglayerComponent } from './pages/loadinglayer/loadinglayer.component';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { DialogLanguageComponent } from './dialogs/dialog-language/dialog-language.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    Map1Component,
    LoadinglayerComponent,
    DialogLanguageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleMapsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatSelectModule,
    MatCardModule,
    DialogInfoComponent,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      },
      // defaultLanguage: 'pt'
  })
  ],
  providers: [DialogInfoComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
