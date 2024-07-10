import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuPageComponent } from './shared/components/menu-page/menu-page.component';
import { HomeComponent } from './pages/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MenuPageComponent,
    HomeComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-portifolio';
}
