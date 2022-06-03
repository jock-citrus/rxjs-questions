import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { DUMMY_PRODUCTS, IProduct } from './product-data';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  dummyProductsBS = new BehaviorSubject<IProduct[]>(DUMMY_PRODUCTS);

  getProductById(id: string): Observable<IProduct | undefined> {
    const product = this.dummyProductsBS.value.find(p => p.id === id);
    return of(product);
  }

  getProductsOfSameCategory(productCode: number): Observable<IProduct[]> {
    const product = this.dummyProductsBS.value.find((p) => p.productCode === productCode);
    const similarProducts = DUMMY_PRODUCTS.filter(p => p.category === product?.category)
    return of(similarProducts);
  }

  setProductActiveProp(id: string, active: boolean): void {
    const products = this.dummyProductsBS.value;
    const updatedProducts = products.map(p => {
      if(p.id === id) {
        return {
          ...p,
          active
        }
      }
      return p
    })
    this.dummyProductsBS.next(updatedProducts)
  }
}
