import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExpertadvicePage } from './expertadvice.page';

describe('ExpertadvicePage', () => {
  let component: ExpertadvicePage;
  let fixture: ComponentFixture<ExpertadvicePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpertadvicePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExpertadvicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
