# RollTheDiceFront

Este projeto foi gerado com [Angular CLI](https://github.com/angular/angular-cli) versão 20.1.0.

## Servidor de Desenvolvimento

Execute  `ng serve` para iniciar o servidor de desenvolvimento. Acesse `http://localhost:4200/`. A aplicação será recarregada automaticamente se você alterar qualquer um dos arquivos de origem.

## Requisitos para Testes

Além de rodar o frontend, é necessário ter o back-end em funcionamento. O código do back-end está disponível neste repositório: [Roll-the-dice-back](https://github.com/MurilloMorgado/roll-the-dice-back) . Certifique-se de que o back-end esteja rodando para realizar os testes completos.

## Descrição do Projeto

O RollTheDiceFront é uma aplicação web que permite ao usuário escolher um dos dados disponiveis e jogar, é enviado o dado escolhido para o back-end. O back-end, por sua vez, pega a quantidade de lados do dado e retorna um valor aleatorio como resultado entre 1 e a quantidade de lados possiveis.

## Funcionalidades Implementadas

Escolher e jogar: O usuário pode escolher o dado que deseja e jogar.

Salvar resultado: Ao jogar, o resultado e salvo no historico no banco H2.

## Back-end

O projeto inclui dois controladores no back-end:

Controller para rolar o dado: Responsável por retornar o valor e salvar o resultado no historico.

Controller para listar o historico: Permite que os dados jogados sejam recuperados e exibidos na interface do usuário.
