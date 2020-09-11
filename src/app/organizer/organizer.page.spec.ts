import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OrganizerPage } from './organizer.page';

describe('OrganizerPage', () => {
  let component: OrganizerPage;
  let fixture: ComponentFixture<OrganizerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OrganizerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
