import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemprojectComponent } from './itemproject.component';

describe('ItemprojectComponent', () => {
  let component: ItemprojectComponent;
  let fixture: ComponentFixture<ItemprojectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemprojectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
