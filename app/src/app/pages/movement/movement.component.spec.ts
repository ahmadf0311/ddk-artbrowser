import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovementComponent } from './movement.component';
import { SlideComponent } from 'src/app/shared/components/slider/slide/slide.component';
import { SliderComponent } from 'src/app/shared/components/slider/slider.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import DataService from 'src/app/core/services/elasticsearch/data.service';

describe('MovementComponent', () => {
  let component: MovementComponent;
  let fixture: ComponentFixture<MovementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NgbModule,
        HttpClientModule,
        RouterModule.forRoot([])
      ],
      declarations: [
        MovementComponent,
        SlideComponent,
        SliderComponent,
      ],
      providers: [
        DataService,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
