import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { faSun, faMoon, faChartLine, faBullseye, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AsyncPipe, NgFor, NgIf, NgClass } from '@angular/common';
// import { ScullyLibModule } from '@scullyio/ng-lib';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    // ScullyLibModule,
    FontAwesomeModule,
    NgIf,
    AsyncPipe,
    NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  popularCategories = [
    'Alcohol Delivery', 'Back To School Delivery', 'Beauty Stores', 'Beauty Supply',
    'Catering Near Me', 'Convenience Stores Canada', 'Dashmart Near Me', 'Deck The Doorstep',
    'Drugstores Canada', 'Flower Delivery', 'Grocery Delivery Canada', 'Halloween',
    'Hsa Bank', 'Hsa Fsa Store', 'Large Group Orders', 'Medicine Delivery',
    'Mothers Day', 'Pet Store Near Me', 'Retail Stores Near Me', 'Seasonal Holidays',
    'Snap Ebt', 'Valentines Day'
  ];

  getToKnowUs = [
    'About Us', 'Careers', 'Investors', 'Company Blog', 'Engineering Blog',
    'Merchant Blog', 'Gift Cards', 'Package Pickup', 'Promotions', 'Dasher Central',
    'LinkedIn', 'Glassdoor', 'Accessibility', 'Newsroom'
  ];

  letUsHelpYou = ['Account Details', 'Order History', 'Help'];

  doingBusiness = [
    'Become a Dasher', 'List Your Business', 'Get Dashers for Deliveries',
    'Get DoorDash for Business'
  ];

  title = 'landingpage';
  isDarkMode = false;
  faSun = faSun;
  faMoon = faMoon;
  faChartLine = faChartLine;
  faBullseye = faBullseye;
  faMobileAlt = faMobileAlt;

  ngOnInit(): void {
    initFlowbite();
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    document.body.classList.toggle('dark');
  }
}
