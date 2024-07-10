import { Component } from '@angular/core';
import { CapaHomeComponent } from '../components/capa-home/capa-home.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CapaHomeComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
