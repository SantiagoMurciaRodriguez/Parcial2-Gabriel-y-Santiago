import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaisesdetailsComponent } from './paisesdetails.component';

describe('PaisesdetailsComponent', () => {
  let component: PaisesdetailsComponent;
  let fixture: ComponentFixture<PaisesdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaisesdetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaisesdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
