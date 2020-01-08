import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SushiAnimationComponent } from './sushi-animation.component';

describe('SushiAnimationComponent', () => {
  let component: SushiAnimationComponent;
  let fixture: ComponentFixture<SushiAnimationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SushiAnimationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SushiAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
