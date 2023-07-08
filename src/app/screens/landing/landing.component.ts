import { Component, OnInit } from '@angular/core';
import { AnimationType } from 'src/app/constants/constants';

@Component({
  selector: 'screen-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  initialAnimation: AnimationType = AnimationType.FadeOut;
  initialAnimationDuration: number = 25;
  initialAnimationDelay: number = 2.5;

  endingAnimation: AnimationType = AnimationType.FadeIn;
  endingAnimationDuration: number = 5;
  endingAnimationDelay: number = 35;

  constructor() { }

  ngOnInit(): void {
  }

}
