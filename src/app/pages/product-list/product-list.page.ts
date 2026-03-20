import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Observable } from 'rxjs';
import { Product } from '../../models/product';
import { CommonModule } from '@angular/common';
import { ModalProductDetailComponent } from '../../components/modal-product-detail/modal-product-detail.component';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule, ModalProductDetailComponent],
  templateUrl: './product-list.page.html',
  styleUrl: './product-list.page.scss',
})
export class ProductListPage {
  // products$!: Observable<Product[]>;
  products: Product[] = [];
  selectedProductId: number = 1;
  showModal: boolean = false;

  constructor(private productService: ProductService) {
    // this.products$ = this.productService.getProducts().pipe(data => data.products);
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data: any) => {
      this.products = data.products;
    });
  }

  openModal(productId: number) {
    console.log('Selected Product ID:', productId);
    this.selectedProductId = productId;
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }
}
