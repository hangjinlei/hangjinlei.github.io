import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialDesignComponent } from './material-design.component';

describe('MaterialDesignComponent', () => {
  let component: MaterialDesignComponent;
  let fixture: ComponentFixture<MaterialDesignComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaterialDesignComponent]
    });
    fixture = TestBed.createComponent(MaterialDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
