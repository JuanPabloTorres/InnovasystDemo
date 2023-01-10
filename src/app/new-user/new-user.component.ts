import { Component } from '@angular/core';
import { AppUser } from '../Model/app-user';
import { RestServiceService } from '../rest-service.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent {


  constructor(public apiService: RestServiceService) {


  }

  onNewUserSubmit(data: any) {


    data.firstName += data.lastName;

    var newUser = new AppUser("0", data.firstName, data.email, data.gender, "Active");

    this.apiService.create(newUser).subscribe((data) => { alert("User Created."); });




  }

}
