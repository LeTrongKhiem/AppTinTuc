import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommoncomponentComponent } from './commoncomponent.component';

describe('CommoncomponentComponent', () => {
  let component: CommoncomponentComponent;
  let fixture: ComponentFixture<CommoncomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommoncomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommoncomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
