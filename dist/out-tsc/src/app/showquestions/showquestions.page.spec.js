import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ShowquestionsPage } from './showquestions.page';
describe('ShowquestionsPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ShowquestionsPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(ShowquestionsPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=showquestions.page.spec.js.map