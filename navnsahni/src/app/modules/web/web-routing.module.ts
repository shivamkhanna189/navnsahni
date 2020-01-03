import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { WorkComponent } from './work/work.component';
import { WebComponent } from './web.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

const routes: Routes = [
  {
    path: '',
    component: WebComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
        data: {
          title: 'home',
          component: 'dashboard'
        }
      },
      {
        path: 'home',
        redirectTo: '',
        pathMatch: "full"
      },
      {
        path: 'dashboard',
        redirectTo: '',
        pathMatch: "full"
      },
      {
        path: 'portfolio',
        component: PortfolioComponent,
        data: {
          title: 'About'
        }
      },
      {
        path: 'about',
        component: AboutComponent,
        data: {
          title: 'About'
        }
      },
      {
        path: 'work',
        component: WorkComponent,
        data: {
          title: 'work'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebRoutingModule { }
