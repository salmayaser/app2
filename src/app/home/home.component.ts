import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../shared/services/products.service';
import { SharedService } from '../shared/services/shared.service';
import { Product } from '../shared/interfaces/products';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  constructor(
    private _productsService: ProductsService,
    private _sharedService: SharedService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this._sharedService.loading$.next(true);
    this._productsService.getProducts().subscribe(
      (res) => {
        this._sharedService.loading$.next(false);
        this.products = res.products;
        console.log(res);
      },
      (error) => {
        this._sharedService.loading$.next(true);
      }
    );
  }

  showProduct(id: number) {
    this._router.navigateByUrl(`/product/${id}`);
  }
}
