import { Routes } from '@angular/router';
import { RechargeComponent } from './recharge/recharge.component';
import { RechargeDashboardComponent } from './recharge-dashboard/recharge-dashboard.component';
import { PaymentComponent } from './payment/payment.component';

export const routes: Routes = [
    {path:'recharge',component:RechargeComponent},
    {path:'',redirectTo:'recharge', pathMatch:'full'},
    {path:'rechargeDashboard',component:RechargeDashboardComponent},
    {path:'payment/:planId',component:PaymentComponent},




];
