import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { HttpModule, JsonpModule } from '@angular/http';
import {AgmCoreModule} from 'angular2-google-maps/core';
import {DataListModule} from 'primeng/primeng';


@NgModule({
  imports:      [ BrowserModule,DataListModule,HttpModule,JsonpModule,AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAKeuM47FDiA2-wEZiTq8_fZ6YscMGkoKY'
    })
   ],
  declarations: [ AppComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
