import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuGastosComponent } from './menu-gastos.component';

describe('MenuGastosComponent', () => {
  let component: MenuGastosComponent;
  let fixture: ComponentFixture<MenuGastosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuGastosComponent]
    });
    fixture = TestBed.createComponent(MenuGastosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
