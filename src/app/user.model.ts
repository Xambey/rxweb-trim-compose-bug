import {  compose,RxwebValidators } from   "@rxweb/reactive-form-validators"   

import { ComposeConfig } from "@rxweb/reactive-form-validators/models/config";
import { trim } from "@rxweb/reactive-form-validators";

export function sysnameValidators(
  additionalConfig?: ComposeConfig
): ComposeConfig {
  return {
    validators: [
      RxwebValidators.required(),
      RxwebValidators.notEmpty(),
      RxwebValidators.maxLength({ value: 255, message: `Message` }),
      trim()
    ],
    ...additionalConfig
  };
}

export class User {

	@compose(sysnameValidators())
  firstName:string;
	
}