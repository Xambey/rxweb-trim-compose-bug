import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms"
import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import {User} from './user.model';

@Component({
    selector: 'app-compose-add',
    templateUrl: './compose-add.component.html'
})
export class ComposeAddComponent implements OnInit {
    userFormGroup: FormGroup
    result: string

    constructor(
        private formBuilder: RxFormBuilder    ) { }

    ngOnInit() {
        let user = new User();
        this.userFormGroup = this.formBuilder.formGroup(user);
    }

    submit() {
      this.result = this.userFormGroup.controls.firstName.value;
            console.log(this.result);
    }
}