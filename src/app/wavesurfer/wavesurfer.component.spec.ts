import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WavesurferComponent } from './wavesurfer.component';

describe('WavesurferComponent', () => {
  let component: WavesurferComponent;
  let fixture: ComponentFixture<WavesurferComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WavesurferComponent]
    });
    fixture = TestBed.createComponent(WavesurferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
