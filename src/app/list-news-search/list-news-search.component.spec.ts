import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListNewsSearchComponent } from './list-news-search.component';

describe('ListNewsSearchComponent', () => {
  let component: ListNewsSearchComponent;
  let fixture: ComponentFixture<ListNewsSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListNewsSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListNewsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
