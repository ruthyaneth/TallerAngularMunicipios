
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BannerComponent } from './components/banner/banner.component';
import { ListComponent } from './components/list/list.component';
import { InfoComponent } from './components/info/info.component';
import {FormsModule} from "@angular/forms";

import {MunicipiosService} from "./services/municipios.service";
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    ListComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
  MunicipiosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
