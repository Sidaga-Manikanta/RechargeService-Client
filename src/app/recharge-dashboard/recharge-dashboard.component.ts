import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlanService } from '../plan.service';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../user.service';
import { Plan } from '../plan';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-recharge-dashboard',
  standalone: true,
  imports: [CommonModule,
    NavbarComponent,
    FormsModule,
     FooterComponent],
  templateUrl: './recharge-dashboard.component.html',
  styleUrl: './recharge-dashboard.component.css'
})
export class RechargeDashboardComponent implements OnInit {

  mobileNumber: number | null = null;
  num: number = 0;
  plans: Plan[] = [];
  planId!: number;
  selectedCategory: string = 'unlimited'; 
  searchQuery!: string;
  activePlans: any[] = [];
  selectedPlan: Plan | null = null;
  isModalOpen: boolean = false;



  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    private planService: PlanService,
    private userService: UserService,
  ) {}

  ngOnInit(): void {
    this.loadPlans(this.selectedCategory);
    this.userService.getCurrentUser().subscribe(data => {
      this.mobileNumber = data;
      this.num = data;
      this.getActivePlans();

    });

  }

  openModal(plan: Plan) {
    this.selectedPlan = plan;
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
    this.selectedPlan = null;
  }

  changeAccount(): void {
    this.router.navigate(['/recharge']);
    this.loadPlans(this.selectedCategory);
  }

  loadPlans(category: string): void {
    this.planService.getPlansByCategory(category).subscribe(data => {
      this.plans = data;
    });
  }

  onCategoryChange(category: string): void {
    this.selectedCategory = category;
    this.loadPlans(category);
  }

  recharge(planId: number): void {
    this.router.navigate(['/payment', planId]);
  }

  // viewDetails(planId: number): void {
  //   throw new Error('Method not implemented.');
  // }

  onSearchChange(searchKeyword: string): void {
    this.planService.searchedPlans(searchKeyword).subscribe(data => {
      this.plans = data;
    });
  }

  getActivePlans(): void {
    this.planService.getUserActivePlans(this.num).subscribe(
      data => {
        this.activePlans = data;
        console.log(this.activePlans)
      },
      error => {
        console.error('Error fetching active plans:', error);
      }
    );
  }
}

