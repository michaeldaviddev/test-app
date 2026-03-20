import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { debounceTime, Observable, Subject } from 'rxjs';
import { Product } from '../../models/product';
import { CommonModule } from '@angular/common';
import { ModalProductDetailComponent } from '../../components/modal-product-detail/modal-product-detail.component';
import { Category } from '../../models/category';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule, ModalProductDetailComponent],
  templateUrl: './product-list.page.html',
  styleUrl: './product-list.page.scss',
})
export class ProductListPage {
  // products$!: Observable<Product[]>;
  products: Product[] = [];
  categories: Category[] = [];
  selectedProductId: number = 1;
  showModal: boolean = false;
  showSuccessMessage: boolean = false;
  search$ = new Subject<string>();

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data: any) => {
      this.products = data.products;
    });

    this.productService.getCategories().subscribe((categories) => {
      this.categories = categories
    });

    this.search$.pipe(
      debounceTime(400)
    ).subscribe((query) => {
      this.productService.getProductsBySearch(query).subscribe((data: any) => {
        this.products = data.products;
      });
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
    const query = event.target.value;
    this.search$.next(query);
  }

  onCategoryChange(event: any) {
    const category = event.target.value;
    if (category) {
      this.productService.getProductsByCategory(category).subscribe((data: any) => {
        this.products = data.products;
      });
    } else {
      this.productService.getProducts().subscribe((data: any) => {
        this.products = data.products;
      });
    }
  }
}
