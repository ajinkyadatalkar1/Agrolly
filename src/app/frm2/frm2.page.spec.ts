import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Frm2Page } from './frm2.page';

describe('Frm2Page', () => {
  let component: Frm2Page;
  let fixture: ComponentFixture<Frm2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Frm2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Frm2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
