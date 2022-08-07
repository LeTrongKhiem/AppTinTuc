import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdealsoflifeComponent } from './idealsoflife.component';

describe('IdealsoflifeComponent', () => {
  let component: IdealsoflifeComponent;
  let fixture: ComponentFixture<IdealsoflifeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdealsoflifeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdealsoflifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
