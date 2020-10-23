import { Component,OnInit } from '@angular/core';
import { ReactiveFormConfig } from '@rxweb/reactive-form-validators';
import { of } from 'rxjs';
import {  RxFormBuilder } from '@rxweb/reactive-form-validators';
import { RxTranslation, TranslationCore } from '@rxweb/translate';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {

  ngOnInit(){
    //if you want to apply global configuration then use below code. 
    ReactiveFormConfig.set({"validationMessage":{"required":"This field is required","alpha":"Only alphabets are allowed.","digit":"Only digits are allowed","password":"Input does not match the password requirements","composeMessageKey":"Input is invalid","compose":"Please enter valid value"}});
  }
}