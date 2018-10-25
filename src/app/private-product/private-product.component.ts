import { Component, OnInit } from "@angular/core";
import { PrivateProductService } from "../private-product.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-private-product",
  templateUrl: "./private-product.component.html",
  styleUrls: ["./private-product.component.css"]
})
export class PrivateProductComponent implements OnInit {
  product: {};

  constructor(private data: PrivateProductService) {}

  ngOnInit() {
    this.data.getProduct().subscribe(data => {
      this.product = data;
      console.log(this.product);
    });
  }

  handleDelete = number => {
    this.data.deleteProd(number).subscribe();
    this.delete();
  };

  delete = () => {
    this.data.getProduct().subscribe(data => {
      this.product = data;
    });
  };
}
