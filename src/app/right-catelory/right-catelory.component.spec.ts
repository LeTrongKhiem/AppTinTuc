import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightCateloryComponent } from './right-catelory.component';

describe('RightCateloryComponent', () => {
  let component: RightCateloryComponent;
  let fixture: ComponentFixture<RightCateloryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RightCateloryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RightCateloryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
