import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WeeklyforcastPage } from './weeklyforcast.page';

describe('WeeklyforcastPage', () => {
  let component: WeeklyforcastPage;
  let fixture: ComponentFixture<WeeklyforcastPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeeklyforcastPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WeeklyforcastPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
