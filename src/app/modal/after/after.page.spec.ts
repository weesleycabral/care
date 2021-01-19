import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AfterPage } from './after.page';

describe('AfterPage', () => {
  let component: AfterPage;
  let fixture: ComponentFixture<AfterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AfterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
