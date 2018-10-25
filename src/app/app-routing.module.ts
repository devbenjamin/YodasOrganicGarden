import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ProductComponent } from "./product/product.component";
import { LoginComponent } from "./login/login.component";
import { PrivateProductComponent } from "./private-product/private-product.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "product", component: ProductComponent },
  { path: "login", component: LoginComponent },
  { path: "privateproduct", component: PrivateProductComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
