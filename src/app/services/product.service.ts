import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';

export interface IProduct {
  id: string;
  productCode: number;
  imageUrl: string;
  name: string;
  category: number;
  active: boolean;
}

export const DUMMY_PRODUCTS: IProduct[] = [
  {
    id: 'product-1',
    productCode: 101,
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
    name: 'Product 1',
    category: 1,
    active: true,
  },
  {
    id: 'product-2',
    productCode: 102,
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
    name: 'Product 2',
    category: 2,
    active: true,
  },
  {
    id: 'product-3',
    productCode: 103,
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
    name: 'Product 3',
    category: 1,
    active: false,
  },
  {
    id: 'product-4',
    productCode: 104,
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
    name: 'Product 4',
    category: 2,
    active: true,
  },
];

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
