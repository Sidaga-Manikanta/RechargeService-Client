import { Routes } from '@angular/router';
import { RechargeComponent } from './recharge/recharge.component';

export const routes: Routes = [
    {path:'recharge',component:RechargeComponent},
    {path:'',redirectTo:'recharge', pathMatch:'full'}


];
