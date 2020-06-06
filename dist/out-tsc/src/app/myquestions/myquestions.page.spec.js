import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { MyquestionsPage } from './myquestions.page';
describe('MyquestionsPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [MyquestionsPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(MyquestionsPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=myquestions.page.spec.js.map