import { Component, OnInit } from '@angular/core';

declare function makeSmoke(): any;

@Component({
  selector: 'widget-smoke',
  templateUrl: './smoke.component.html',
  styleUrls: ['./smoke.component.css']
})
export class SmokeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    makeSmoke();
  }

}
