import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TareaDetailComponent } from './tarea-detail.component';

describe('TareaDetailComponent', () => {
  let component: TareaDetailComponent;
  let fixture: ComponentFixture<TareaDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TareaDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TareaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
