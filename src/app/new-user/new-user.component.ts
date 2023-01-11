import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppUser } from '../Model/app-user';
import { RestServiceService } from '../rest-service.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent {

  newUserForm:FormGroup= new FormGroup({
    id:new FormControl(''),
    gender: new FormControl('', Validators.required),
    name:new FormControl('', Validators.required),
    email:new FormControl('', [Validators.required,	Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    
  });

  constructor(public apiService: RestServiceService) {


  }

  onNewUserSubmit() {

    this.apiService.create(this.newUserForm).subscribe((data) => { alert("User Created."); });
  }

}
