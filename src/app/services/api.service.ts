import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

    //users
    add_user(data : User){
      return this.http.post<User>("https://63153266fa82b738f75415b9.mockapi.io/api/houses/users",data)
    }
    get_users(){
      return this.http.get<User[]>("https://63153266fa82b738f75415b9.mockapi.io/api/houses/users")
    }
    get_user(id:number){
      return this.http.get<User[]>("https://63153266fa82b738f75415b9.mockapi.io/api/houses/users/"+id)
    }
    edit_user(data:User,id : number){
      return this.http.put<User>("https://63153266fa82b738f75415b9.mockapi.io/api/houses/users/"+id,data)
    }
    delete_user(id : number){
      return this.http.delete<User>("https://63153266fa82b738f75415b9.mockapi.io/api/houses/users/"+id)
    }
}
