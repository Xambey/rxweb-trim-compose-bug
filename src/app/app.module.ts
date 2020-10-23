import { NgModule,LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ComposeAddComponent } from './compose-add.component';
import { AppComponent } from './app.component';

import {  RxReactiveFormsModule } from "@rxweb/reactive-form-validators"
import { RxTranslateModule } from '@rxweb/translate';
import {RxReactiveDynamicFormsModule} from '@rxweb/reactive-dynamic-forms'

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt)

@NgModule({
  imports:      [ BrowserModule, FormsModule,    RxTranslateModule.forRoot({
    cacheLanguageWiseObject: true,
    globalFilePath: "assets/i18n/{{language-code}}/global.{{language-code}}.json",
    filePath: "assets/i18n/{{language-code}}/{{translation-name}}.{{language-code}}.json"
}),ReactiveFormsModule,RxReactiveFormsModule,HttpClientModule,RxReactiveDynamicFormsModule ],
  declarations: [AppComponent, ComposeAddComponent],
  bootstrap:    [ AppComponent],
  providers:[{ provide: LOCALE_ID, useValue: 'pt' }]
})
export class AppModule { }