import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  private _loginUrl =
    "https://efa-gardenapp-backend.herokuapp.com/api/auth/login";

  constructor(private http: HttpClient) {}

  loginAdmin(admin) {
    return this.http.post<any>(this._loginUrl, admin);
  }
}
