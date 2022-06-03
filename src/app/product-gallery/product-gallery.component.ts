import { Component } from '@angular/core';
import { switchMap, Observable, of, shareReplay, combineLatest, map } from 'rxjs';
import { IProduct } from '../services/product-data';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-gallery',
  templateUrl: './product-gallery.component.html',
  styleUrls: ['./product-gallery.component.css'],
})
export class ProductGalleryComponent {
  /** SECTION 1 */

  productOneId: string = 'product-1';

  productOne$: Observable<IProduct | undefined> = this.productService
    .getProductById(this.productOneId)
    .pipe(shareReplay({ bufferSize: 1, refCount: true }));

  productsWithSameCategoryAsProductOne$: Observable<IProduct[]> =
    this.productOne$.pipe(
      switchMap((productOne) =>
        this.productService.getProductsOfSameCategory(productOne?.productCode)
      )
    );

  /** SECTION 2 */

  productIds: string[] = ['product-1', 'product-2', 'product-3'];

  productObs: Observable<IProduct | undefined>[] = this.productIds.map((id) =>
    this.productService.getProductById(id)
  );

  products$: Observable<(IProduct | undefined)[]> = combineLatest(
    this.productObs
  ).pipe(shareReplay({ bufferSize: 1, refCount: true }));

  activeProducts$: Observable<(IProduct | undefined)[]> = this.products$.pipe(
    map((products) => products.filter((product) => product?.active)),
    shareReplay({ bufferSize: 1, refCount: true })
  );

  activeProductNames$: Observable<(string | undefined)[]> = this.activeProducts$.pipe(map(products => products.map(product => product?.name)));

  constructor(private productService: ProductService) {}
}
