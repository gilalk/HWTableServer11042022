import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  users:any = [];

  constructor(private _user:HttpClient) { }

  getUsers(){
    return this._user.get('https://fakestoreapi.com/users');
  }

  getSingleUser(id:number){
    return this._user.get(`https://fakestoreapi.com/users/${id}`);
  }
}
