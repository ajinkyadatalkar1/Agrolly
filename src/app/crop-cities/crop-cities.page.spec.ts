import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CropCitiesPage } from './crop-cities.page';

describe('CropCitiesPage', () => {
  let component: CropCitiesPage;
  let fixture: ComponentFixture<CropCitiesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CropCitiesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CropCitiesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
