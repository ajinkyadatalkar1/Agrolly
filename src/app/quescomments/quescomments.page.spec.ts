import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QuescommentsPage } from './quescomments.page';

describe('QuescommentsPage', () => {
  let component: QuescommentsPage;
  let fixture: ComponentFixture<QuescommentsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuescommentsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QuescommentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
