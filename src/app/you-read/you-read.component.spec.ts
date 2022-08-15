import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YouReadComponent } from './you-read.component';

describe('YouReadComponent', () => {
  let component: YouReadComponent;
  let fixture: ComponentFixture<YouReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YouReadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YouReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
