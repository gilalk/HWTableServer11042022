import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Interfaces/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-main',
  templateUrl: './user-main.component.html',
  styleUrls: ['./user-main.component.css']
})
export class UserMainComponent implements OnInit {

  users:User[] = [];
  isCollapsed:boolean = false;
  cardId:number = 0;

  constructor(private userService:UserService) { 
    userService.getUsers().subscribe((users:any) => {
      this.users = users;
      console.log(this.users)
    });
  }

  ngOnInit(): void {
  }

  cardOn(id:number){
    this.cardId = id;
  }
  cardOff(){
    this.cardId = 0;
  }

}
