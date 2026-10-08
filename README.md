# Web Project Around

Projeto desenvolvido durante o curso de Desenvolvimento Web, com o objetivo de praticar HTML, CSS e JavaScript.

## Descrição

O projeto consiste em uma página de perfil interativa, na qual o usuário pode editar suas informações e gerenciar cartões de lugares diretamente pela interface.

## Funcionalidades

### Perfil

- Abrir o pop-up de edição de perfil.
- Fechar o pop-up pelo botão de fechar.
- Preencher automaticamente os campos "Nome" e "Sobre mim" com as informações atuais do perfil.
- Editar o nome e a descrição do perfil.
- Atualizar as informações exibidas na página ao clicar em "Salvar".
- Fechar automaticamente o pop-up após o envio do formulário.

### Cartões

- Exibir os cartões iniciais dinamicamente a partir de um array de dados e de um elemento `<template>`.
- Criar novos cartões pelo pop-up "Novo Local".
- Informar um nome e um link de imagem para cada novo cartão.
- Adicionar o novo cartão como o primeiro elemento da lista.
- Limpar o formulário após a criação de um cartão.
- Curtir e descurtir cartões.
- Excluir cartões.
- Abrir uma versão ampliada da imagem ao clicar nela.
- Exibir o título do lugar como legenda da imagem ampliada.
- Fechar o pop-up da imagem pelo botão de fechar.
- Utilizar valores padrão para cartões sem nome ou sem link de imagem.

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript
- DOM API

## Estrutura do projeto

```text
web_project_around_pt/
├── blocks/
├── images/
├── pages/
├── scripts/
├── vendor/
├── index.html
└── README.md
´´´´
## Como executar

Clone este repositório:

git clone https://github.com/NK24469/web_project_around_pt.git

Abra a pasta do projeto.

Abra o arquivo index.html no navegador.

## Observação

As alterações realizadas no perfil e nos cartões não são persistidas após atualizar a página. A persistência dos dados será implementada em etapas posteriores do projeto.

## Autor

Nícolas Mendonça

```
