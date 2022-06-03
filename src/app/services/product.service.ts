import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { DUMMY_PRODUCTS, IProduct } from './product-data';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  dummyProductsBS = new BehaviorSubject<IProduct[]>(DUMMY_PRODUCTS);

  getProductById$(id: string): Observable<IProduct | undefined> {
    return of(undefined) 
  }

  getProductsOfSameCategory$(productCode: number): Observable<IProduct[]> {
    return of([])
  }

  setProductActiveProp(id: string, active: boolean): void {
    
  }
}
