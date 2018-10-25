import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({
    Authorization: localStorage.getItem("token")
  })
};

@Injectable({
  providedIn: "root"
})
export class PrivateProductService {
  constructor(private http: HttpClient) {}

  getProduct() {
    return this.http.get(
      "https://efa-gardenapp-backend.herokuapp.com/api/product/"
    );
  }

  deleteProd(id: number) {
    return this.http.delete(
      `https://efa-gardenapp-backend.herokuapp.com/api/product/${id}`,
      httpOptions
    );
  }
}
