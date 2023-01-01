import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetilsComponent } from './product-detils.component';

describe('ProductDetilsComponent', () => {
  let component: ProductDetilsComponent;
  let fixture: ComponentFixture<ProductDetilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDetilsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDetilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
