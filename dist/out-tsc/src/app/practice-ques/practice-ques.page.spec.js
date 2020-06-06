import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { PracticeQuesPage } from './practice-ques.page';
describe('PracticeQuesPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PracticeQuesPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(PracticeQuesPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=practice-ques.page.spec.js.map