import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeuPrimeiroAngularcliComponent } from './meu-primeiro-angularcli.component';

describe('MeuPrimeiroAngularcliComponent', () => {
  let component: MeuPrimeiroAngularcliComponent;
  let fixture: ComponentFixture<MeuPrimeiroAngularcliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeuPrimeiroAngularcliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeuPrimeiroAngularcliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
