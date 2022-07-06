import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomesticComponent } from './domestic.component';

describe('DomesticComponent', () => {
  let component: DomesticComponent;
  let fixture: ComponentFixture<DomesticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DomesticComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DomesticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
