import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CropsowingPage } from './cropsowing.page';

describe('CropsowingPage', () => {
  let component: CropsowingPage;
  let fixture: ComponentFixture<CropsowingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CropsowingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CropsowingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
