import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritePetsListComponent } from './favorite-pets-list.component';

describe('FavoritePetsListComponent', () => {
  let component: FavoritePetsListComponent;
  let fixture: ComponentFixture<FavoritePetsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FavoritePetsListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FavoritePetsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
