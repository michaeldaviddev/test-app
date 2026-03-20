import { Observable } from 'rxjs';
import { ProductService } from './../../services/product.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-modal-product-detail',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './modal-product-detail.component.html',
  styleUrl: './modal-product-detail.component.scss',
})
export class ModalProductDetailComponent {
  product$!: Observable<Product>;
  @Input() productId!: number;
  @Output() close = new EventEmitter<void>();
  @Output() success = new EventEmitter<void>();
  productForm: FormGroup;

  constructor(private productService: ProductService, private fb: FormBuilder) {
    this.productForm = this.fb.group({
      title: [''],
      description: [''],
    });
  }

  ngOnInit(): void {
    this.product$ = this.productService.getProductById(this.productId);
    this.product$.subscribe((product) => {
      this.productForm.patchValue({
        title: product.title,
        description: product.description,
      });
    });
  }

  closeModal() {
    this.close.emit();
  }

  saveChanges() {
    this.productService.updateProduct(this.productId, this.productForm.value).subscribe(
      next => {
        this.closeModal();
        this.success.emit();
      },
      error => {
        console.error('Error updating product:', error);
      }
    );
  }
}
