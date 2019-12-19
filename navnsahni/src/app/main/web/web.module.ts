import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebRoutingModule } from './web-routing.module';
import { WebComponent } from './web.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { WorkComponent } from './work/work.component';


@NgModule({
  declarations: [WebComponent, DashboardComponent, AboutComponent, WorkComponent],
  imports: [
    CommonModule,
    WebRoutingModule
  ]
})
export class WebModule { }
