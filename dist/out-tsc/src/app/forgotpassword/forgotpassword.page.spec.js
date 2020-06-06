import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ForgotpasswordPage } from './forgotpassword.page';
describe('ForgotpasswordPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ForgotpasswordPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(ForgotpasswordPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=forgotpassword.page.spec.js.map