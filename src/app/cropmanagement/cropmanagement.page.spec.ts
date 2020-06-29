import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CropmanagementPage } from './cropmanagement.page';

describe('CropmanagementPage', () => {
  let component: CropmanagementPage;
  let fixture: ComponentFixture<CropmanagementPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CropmanagementPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CropmanagementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
