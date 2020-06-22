import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AnnualforecastPage } from './annualforecast.page';

describe('AnnualforecastPage', () => {
  let component: AnnualforecastPage;
  let fixture: ComponentFixture<AnnualforecastPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnualforecastPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AnnualforecastPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
