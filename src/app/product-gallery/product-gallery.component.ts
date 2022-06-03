import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
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
  
  productOne$: Observable<IProduct | undefined> = of(undefined);
  
  productsWithSameCategoryAsProductOne$: Observable<IProduct[]> = of([]);
  
  /** SECTION 2 */

  productIds: string[] = ['product-1', 'product-2', 'product-3'];
  
  products$: Observable<(IProduct | undefined)[]> = of([]);

  activeProducts$: Observable<(IProduct | undefined)[]> = of([]);

  activeProductNames$: Observable<(string | undefined)[]> = of([]);

  constructor(private productService: ProductService) {}
}
