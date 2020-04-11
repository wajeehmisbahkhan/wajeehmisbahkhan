import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ContactMePage } from './contact-me.page';

describe('ContactMePage', () => {
  let component: ContactMePage;
  let fixture: ComponentFixture<ContactMePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactMePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ContactMePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
