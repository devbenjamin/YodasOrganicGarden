import { Component, OnInit } from "@angular/core";
import { ProductService } from "../product.service";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"]
})
export class ProductComponent implements OnInit {
  product: {};

  constructor(private data: ProductService) {}

  ngOnInit() {
    this.data.getProduct().subscribe(data => {
      this.product = data;
      console.log(this.product);
    });
  }
}
