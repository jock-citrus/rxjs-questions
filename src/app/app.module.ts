import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductService } from './services/product.service';
import { ProductGalleryComponent } from './product-gallery/product-gallery.component';

@NgModule({
  declarations: [AppComponent, ProductGalleryComponent],
  imports: [BrowserModule],
  providers: [ProductService],
  bootstrap: [AppComponent],
})
export class AppModule {}
