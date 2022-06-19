import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userName: string = "";
  password: string = "";
  errorMessage: string = "";
  accounts: any = [
    {userName: "admin", password: "admin"},
    {userName: "user", password: "user"},
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
    
  }

  public onEnter(event: any) {
    event.target.blur();
    this.login()
  }

  public login() {
    if (this.userName === "" || this.password === "") {
      this.errorMessage = "Username or Password can not be empty";
    } else {
      var checkUser = this.accounts.filter((a: any) => a.userName.includes(this.userName));
      if (checkUser.length !== 0) {
        localStorage.setItem("userName", this.userName);
        if (checkUser[0].password === this.password) {
          this.errorMessage = "";
          localStorage.setItem("password", this.password);
          this.router.navigate(['/employee/list']);
        } else {
          this.errorMessage = "Password is not valid";
        }
      }else {
        this.errorMessage = "User not found";
      }
    }
  }

}
