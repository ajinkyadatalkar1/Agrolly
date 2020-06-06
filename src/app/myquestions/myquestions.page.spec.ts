import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyquestionsPage } from './myquestions.page';

describe('MyquestionsPage', () => {
  let component: MyquestionsPage;
  let fixture: ComponentFixture<MyquestionsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyquestionsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyquestionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
