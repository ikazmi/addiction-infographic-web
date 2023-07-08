import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing/landing.component';
import { WidgetsModule } from '../widgets/widgets.module';



@NgModule({
  declarations: [
    LandingComponent
  ],
  imports: [
    CommonModule,
    WidgetsModule
  ]
})
export class ScreensModule { }
