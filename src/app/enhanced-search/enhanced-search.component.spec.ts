import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnhancedSearchComponent } from './enhanced-search.component';

describe('EnhancedSearchComponent', () => {
  let component: EnhancedSearchComponent;
  let fixture: ComponentFixture<EnhancedSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnhancedSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnhancedSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
