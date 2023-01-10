import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {



  constructor(private router: Router, private route: ActivatedRoute) { }

  onSubmitLogin(data: { username: string; password: string; }) {

    console.log(data);

    if (data.username == "" || data.password == "") {

      alert("Credentials not inserted...!!!");

      return;

    } else {

      if (data.username == "user1" && data.password == "123") {

    

        this.router.navigate(['/userList']);

    

      } else {

        alert("Credentials not valid...!!!");

        return;

      }


    }





  }

}
