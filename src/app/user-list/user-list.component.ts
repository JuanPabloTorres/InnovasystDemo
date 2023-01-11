import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppUser } from '../Model/app-user';
import { RestServiceService } from '../rest-service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {

  Users: any = [];

 

  constructor(public apiService: RestServiceService,private router:Router) { }

  ngOnInit() {

  this.GetUsers();
    
  }

  GetUsers()
  {
    this.apiService.getUsers().subscribe((data: {}) => {

      this.Users = data;
    });
  }


  remove(id: string) {

    this.apiService.delete(id).subscribe((data: {}) => {

      this.GetUsers();
      
    });
  }


    edit(id: string) {

      if(id != "")
      {
console.log(id);

        this.router.navigate(['/editUser',id]);
      }
  }
}
