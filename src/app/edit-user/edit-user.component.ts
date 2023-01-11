import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { AppUser } from '../Model/app-user';
import { RestServiceService } from '../rest-service.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent {
  
  id!: string | null;

  editUserForm:FormGroup= new FormGroup({
    id:new FormControl(''),
    gender: new FormControl('', Validators.required),
    name:new FormControl('', Validators.required),
    email:new FormControl('', [Validators.required,	Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    
  });

  selectedUser:AppUser=new AppUser("0", "EditUser", "example01@gmail.com","Male","Inactive");
  
  constructor(private router: Router, private route: ActivatedRoute,public apiService: RestServiceService) {}

  ngOnInit() {

    console.log(this.route.snapshot.queryParamMap.get('id'));

    this.route.paramMap.subscribe((params: ParamMap) => {

      this.id = params.get('id')

      console.log(this.id);

    });

    this.apiService.getUser(this.id).subscribe((data:AppUser) => {

      console.log(data);

      this.selectedUser = data;

      this.editUserForm = new FormGroup({
        id:new FormControl(data.id),
        gender: new FormControl(data.gender, Validators.required),
        name:new FormControl(data.name, Validators.required),
        email:new FormControl(data.email, [Validators.required,	Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
        
      });

    

   
      
    });
    
  }

  onEditUserSubmit() {

  console.log(this.editUserForm.value)


    this.apiService.update(this.selectedUser.id,this.editUserForm.value).subscribe((data) => 
    { 
      console.log(data); 

      alert("User Updated."); 

      this.router.navigate(['/userList']);

    });
  }

}
