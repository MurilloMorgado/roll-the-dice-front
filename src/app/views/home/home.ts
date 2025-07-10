import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { HistoricoRolagem } from '../../models/historicoRolagem';
import { TableModule } from 'primeng/table';
import { RolagemDeDadosService } from '../../service/RolagemDeDadosService.service';
import { firstValueFrom } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Dado } from '../../models/dado';


@Component({
  selector: 'app-home',
  imports: [ButtonModule, Header, Footer, TableModule, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {

  dadoSelecionado: number | null = null;
  resultado: Dado | null = null;
  // Array de dados (lado)
  dados = [
    { label: 'D2', lados: 2 },
    { label: 'D4', lados: 4 },
    { label: 'D6', lados: 6 },
    { label: 'D8', lados: 8 },
    { label: 'D10', lados: 10 },
    { label: 'D20', lados: 20 }
  ];

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

  async rolarDado() {
    if (this.dadoSelecionado !== null) {
      const dadoRolado = new Dado();
      dadoRolado.lado = this.dadoSelecionado;

      this.resultado = await firstValueFrom(this.rolagemDeDadosService.rolarDado(dadoRolado));

      console.log(this.resultado);

    }
  }

  selecionarDado(lados: number): void {
    this.dadoSelecionado = lados;
    console.log("Dado de " + lados + " lados selecionado");
  }
}
