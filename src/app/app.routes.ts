import { Routes } from '@angular/router';
import { RechargeComponent } from './recharge/recharge.component';
import { RechargeDashboardComponent } from './recharge-dashboard/recharge-dashboard.component';

export const routes: Routes = [
    {path:'recharge',component:RechargeComponent},
    {path:'',redirectTo:'recharge', pathMatch:'full'},
    {path:'rechargeDashboard',component:RechargeDashboardComponent},



];
