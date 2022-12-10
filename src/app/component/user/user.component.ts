import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private api:ApiService) { }
  
  dataSource!: User[];
  ngOnInit(): void {
    this.get_All_users()
  }

  get_All_users(){
    this.api.get_users()
    .subscribe({
      next:(res)=>{
        console.log("test");
        
       this.dataSource=res;
       console.log(res);
       
      },
      error:(err)=>{
        console.log(err);
        alert('err while getting users');
      }
    });
  }
}
