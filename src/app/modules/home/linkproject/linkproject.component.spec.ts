import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkprojectComponent } from './linkproject.component';

describe('LinkprojectComponent', () => {
  let component: LinkprojectComponent;
  let fixture: ComponentFixture<LinkprojectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkprojectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
