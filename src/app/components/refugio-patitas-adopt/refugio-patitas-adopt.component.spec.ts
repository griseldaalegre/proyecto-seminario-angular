import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefugioPatitasAdoptComponent } from './refugio-patitas-adopt.component';

describe('RefugioPatitasAdoptComponent', () => {
  let component: RefugioPatitasAdoptComponent;
  let fixture: ComponentFixture<RefugioPatitasAdoptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RefugioPatitasAdoptComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RefugioPatitasAdoptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
