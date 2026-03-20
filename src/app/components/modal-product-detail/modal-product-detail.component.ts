import { Observable } from 'rxjs';
import { ProductService } from './../../services/product.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal-product-detail',
  imports: [CommonModule],
  templateUrl: './modal-product-detail.component.html',
  styleUrl: './modal-product-detail.component.scss',
})
export class ModalProductDetailComponent {
  product$!: Observable<Product>;
  @Input() productId!: number;
  @Output() close = new EventEmitter<void>();

  constructor(private productService: ProductService) {
    // console.log('Received Product ID in Modal:', this.productId);
    // this.product$ = this.productService.getProductById(this.productId);
  }

  ngOnInit(): void {
    console.log('Received Product ID in Modal (ngOnInit):', this.productId);
    this.product$ = this.productService.getProductById(this.productId);
  }

  closeModal() {
    this.close.emit();
  }
}
