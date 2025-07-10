import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { HistoricoRolagem } from '../../models/historicoRolagem';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-home',
  imports: [ButtonModule, Header, Footer, TableModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {

  historicoRolagem!: HistoricoRolagem[];

  ngOnInit(): void {
  }

}
