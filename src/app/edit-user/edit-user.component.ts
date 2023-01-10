import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestServiceService } from '../rest-service.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent {
  
  id!: string | null;

 
  
  constructor(private router: Router, private route: ActivatedRoute,public apiService: RestServiceService) {}

  ngOnInit() {

    this.id = this.route.snapshot.queryParamMap.get('id');

    this.apiService.getUser(this.id).subscribe((data) => {

      console.log(data);
    });
    
  }

}
