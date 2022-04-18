import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from 'src/app/Interfaces/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.css']
})
export class UserInformationComponent implements OnInit {

  user:User = {} as User;
  id:number = 0;

  constructor(private userService:UserService,
              private router: Router,
              private activatedRoute:ActivatedRoute) { 
          this.activatedRoute.params.subscribe( (params:Params) => {
          this.id = params['id'];})
}

  ngOnInit(): void {
    this.userService.getSingleUser(this.id)
                    .subscribe((response:any) => {
                      this.user = response;
                      console.log(this.user);
                    })
  }

}
