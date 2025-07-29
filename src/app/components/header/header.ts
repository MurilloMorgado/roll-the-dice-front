import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { Ripple } from 'primeng/ripple';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-header',
  imports: [MenubarModule, BadgeModule, AvatarModule, InputTextModule, Ripple, CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header implements OnInit {

  items: MenuItem[] | undefined;

  ngOnInit(): void {
    this.items = [
      {
        label: 'Inicio',
        icon: 'pi pi-home',
        routerLink: '/home'
      },
      {
        label: 'Sobre',
        icon: 'pi pi-search',
        routerLink: '/about'
      },
      {
        label: 'Contato',
        icon: 'pi pi-search',
        url: 'https://www.linkedin.com/in/murillo-morgado/',
        target: '_blank'
      },
    ];
  }

}
