import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';

@Component({
  selector: 'app-home',
  imports: [ButtonModule, Header, Footer ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
