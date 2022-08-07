import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExclusivenewsComponent } from './exclusivenews.component';

describe('ExclusivenewsComponent', () => {
  let component: ExclusivenewsComponent;
  let fixture: ComponentFixture<ExclusivenewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExclusivenewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExclusivenewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
