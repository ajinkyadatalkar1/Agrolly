import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OnetimepasswordPage } from './onetimepassword.page';

describe('OnetimepasswordPage', () => {
  let component: OnetimepasswordPage;
  let fixture: ComponentFixture<OnetimepasswordPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnetimepasswordPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OnetimepasswordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
