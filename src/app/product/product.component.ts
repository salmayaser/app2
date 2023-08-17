import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../shared/services/products.service';
import { Product } from '../shared/interfaces/products';
import { SharedService } from '../shared/services/shared.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  id!: number;
  product!: Product;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _productsService: ProductsService,
    private _sharedService: SharedService
  ) {}

  ngOnInit(): void {
    this._activatedRoute.params.subscribe((params: any) => {
      this.id = params.id;
      this.getProduct();
    });
  }

  getProduct() {
    this._sharedService.loading$.next(true);
    this._productsService.getSingleProduct(this.id).subscribe((res) => {
      this.product = res;
      this._sharedService.loading$.next(false);
    });
  }
}
