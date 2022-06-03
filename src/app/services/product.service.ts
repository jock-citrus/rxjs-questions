import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, map, of } from 'rxjs';
import { DUMMY_PRODUCTS, IProduct } from './product-data';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  dummyProductsBS = new BehaviorSubject<IProduct[]>(DUMMY_PRODUCTS);

  getProductById(id: string): Observable<IProduct | undefined> {
    return this.dummyProductsBS.pipe(map(products => products.find(p => p.id === id)));
  }

  getProductsOfSameCategory(productCode: number | undefined): Observable<IProduct[]> {
    if(!productCode) {
      return of([])
    }
    return this.dummyProductsBS.pipe(
      map(products => {
        const product = products.find((p) => p.productCode === productCode);
        const similarProducts = DUMMY_PRODUCTS.filter(p => p.category === product?.category)
        return similarProducts
      }),
    );
  }
}
