import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalProductDetailComponent } from './modal-product-detail.component';

describe('ModalProductDetailComponent', () => {
  let component: ModalProductDetailComponent;
  let fixture: ComponentFixture<ModalProductDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalProductDetailComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ModalProductDetailComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
