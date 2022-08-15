import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StraighttalkComponent } from './straighttalk.component';

describe('StraighttalkComponent', () => {
  let component: StraighttalkComponent;
  let fixture: ComponentFixture<StraighttalkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StraighttalkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StraighttalkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
