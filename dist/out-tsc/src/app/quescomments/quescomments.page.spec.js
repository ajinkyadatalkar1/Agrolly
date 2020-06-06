import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { QuescommentsPage } from './quescomments.page';
describe('QuescommentsPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [QuescommentsPage],
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
//# sourceMappingURL=quescomments.page.spec.js.map