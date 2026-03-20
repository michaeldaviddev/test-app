import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { debounceTime, Observable } from 'rxjs';
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
  showSuccessMessage: boolean = false;

  constructor(private productService: ProductService) {
    // this.products$ = this.productService.getProducts().pipe(data => data.products);
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data: any) => {
      this.products = data.products;
    });
  }

  openModal(productId: number) {
    this.selectedProductId = productId;
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  onSearchInput(event: any) {
    this.productService.getProductsBySearch(event.target.value).pipe(
      debounceTime(500)
    ).subscribe((data: any) => {
      this.products = data.products;
    });
  }
}
