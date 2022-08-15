import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreentourismComponent } from './greentourism.component';

describe('GreentourismComponent', () => {
  let component: GreentourismComponent;
  let fixture: ComponentFixture<GreentourismComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GreentourismComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GreentourismComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
