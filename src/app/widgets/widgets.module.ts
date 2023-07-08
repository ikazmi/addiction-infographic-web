import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmokeComponent } from './smoke/smoke.component';
import { OverlayComponent } from './overlay/overlay.component';
import { AddictionComponent } from './addiction/addiction.component';
import { AddictionsComponent } from './addictions/addictions.component';
import { MindBodyComponent } from './mind-body/mind-body.component';
import { AddictionCycleComponent } from './addiction-cycle/addiction-cycle.component';
import { SayNoComponent } from './say-no/say-no.component';



@NgModule({
  declarations: [
    SmokeComponent,
    OverlayComponent,
    AddictionComponent,
    AddictionsComponent,
    MindBodyComponent,
    AddictionCycleComponent,
    SayNoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SmokeComponent,
    OverlayComponent,
    AddictionComponent,
    AddictionsComponent,
    MindBodyComponent,
    AddictionCycleComponent,
    SayNoComponent
  ]
})
export class WidgetsModule { }
