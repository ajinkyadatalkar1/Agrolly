import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { Tab3Page } from './tab3.page';
describe('Tab3Page', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [Tab3Page],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(Tab3Page);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=tab3.page.spec.js.map