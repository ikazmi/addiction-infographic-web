import { Component, OnInit, Input } from '@angular/core';
import { AnimationType } from 'src/app/constants/constants';

@Component({
  selector: 'widget-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.css']
})
export class OverlayComponent implements OnInit {
  @Input() background: string = '#fff';
  @Input() animation: AnimationType = AnimationType.FadeIn;
  @Input() duration: number = 2;
  @Input() delay: number = 0;
  @Input() zIndex: number = 100;

  constructor() { }

  ngOnInit(): void {
  }

}
