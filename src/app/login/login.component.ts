import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, FormControl } from "@angular/forms";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  createLogin: FormGroup;
  loginAdminData = {};

  constructor(
    private lp: FormBuilder,
    private _auth: AuthService,
    private _router: Router
  ) {}

  ngOnInit() {
    this.createLogin = this.lp.group({
      email: new FormControl(),
      password: new FormControl()
    });
  }

  loginAdmin() {
    this._auth.loginAdmin(this.loginAdminData).subscribe(
      res => {
        console.log(res);
        localStorage.setItem("token", res.token);
        this._router.navigate(["/privateproduct"]);
      },
      err => console.log(err)
    );
  }
}
