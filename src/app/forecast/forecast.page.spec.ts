import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ForecastPage } from './forecast.page';

describe('ForecastPage', () => {
  let component: ForecastPage;
  let fixture: ComponentFixture<ForecastPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForecastPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ForecastPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
