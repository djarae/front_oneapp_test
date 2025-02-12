import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallePostComponent } from './detalle-post.component';

describe('DetallePostComponent', () => {
  let component: DetallePostComponent;
  let fixture: ComponentFixture<DetallePostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetallePostComponent]
    });
    fixture = TestBed.createComponent(DetallePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
