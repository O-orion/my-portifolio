import { Component } from '@angular/core';
import { CapaHomeComponent } from '../components/capa-home/capa-home.component';
import { SobreMimComponent } from '../components/sobre-mim/sobre-mim.component';
import { MeusProjetosComponent } from '../components/meus-projetos/meus-projetos.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CapaHomeComponent,
    SobreMimComponent,
    MeusProjetosComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
