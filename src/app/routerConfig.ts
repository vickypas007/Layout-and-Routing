import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import {Routes} from '@angular/router';

const appRoutes: Routes =[
{
    path:'',
    component:HomeComponent
},
{
    path:'about',
    component: AboutComponent
},
{
    path:'dashboard',
    component:DashboardComponent
}
];

export default appRoutes;