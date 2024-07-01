import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefugioPatitasHomeComponent } from './refugio-patitas-home.component';

describe('RefugioPatitasHomeComponent', () => {
  let component: RefugioPatitasHomeComponent;
  let fixture: ComponentFixture<RefugioPatitasHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RefugioPatitasHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RefugioPatitasHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
