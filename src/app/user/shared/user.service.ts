import { Injectable } from '@angular/core';
import { ValidationService } from '../../shared/utility';

@Injectable()
export class UserService {

  constructor(public validationService: ValidationService) { }

}
