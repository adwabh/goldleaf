import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { faSun, faMoon, faChartLine, faBullseye, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AsyncPipe, NgFor, NgIf, NgClass } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    FontAwesomeModule,
    NgIf,
    AsyncPipe,
    NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
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
