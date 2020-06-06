import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ForumPage } from './forum.page';

describe('ForumPage', () => {
  let component: ForumPage;
  let fixture: ComponentFixture<ForumPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForumPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ForumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
