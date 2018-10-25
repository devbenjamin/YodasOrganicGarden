import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getProduct() {
    return this.http.get(
      "https://efa-gardenapp-backend.herokuapp.com/api/product/"
    );
  }
}
