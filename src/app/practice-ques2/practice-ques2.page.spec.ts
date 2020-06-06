import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PracticeQues2Page } from './practice-ques2.page';

describe('PracticeQues2Page', () => {
  let component: PracticeQues2Page;
  let fixture: ComponentFixture<PracticeQues2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PracticeQues2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PracticeQues2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
