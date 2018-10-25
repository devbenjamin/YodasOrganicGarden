import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateProductComponent } from './private-product.component';

describe('PrivateProductComponent', () => {
  let component: PrivateProductComponent;
  let fixture: ComponentFixture<PrivateProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivateProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
