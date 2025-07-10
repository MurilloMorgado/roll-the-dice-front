import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { HistoricoRolagem } from '../../models/historicoRolagem';
import { TableModule } from 'primeng/table';
import { RolagemDeDadosService } from '../../service/RolagemDeDadosService.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-home',
  imports: [ButtonModule, Header, Footer, TableModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {

  constructor(
    private rolagemDeDadosService: RolagemDeDadosService
  ) { }

  historicoRolagem!: HistoricoRolagem[];

  ngOnInit(): void {
    this.buscarHistoricoDeRolagem();
  }

  async buscarHistoricoDeRolagem() {
    this.historicoRolagem = await firstValueFrom(this.rolagemDeDadosService.listarHistorico());
  }
}
