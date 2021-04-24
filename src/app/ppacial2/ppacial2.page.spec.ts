import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Ppacial2Page } from './ppacial2.page';

describe('Ppacial2Page', () => {
  let component: Ppacial2Page;
  let fixture: ComponentFixture<Ppacial2Page>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Ppacial2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Ppacial2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
