import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { Frm1Page } from './frm1.page';
describe('Frm1Page', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [Frm1Page],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(Frm1Page);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=frm1.page.spec.js.map