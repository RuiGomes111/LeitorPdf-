# 📖 LeitorPdf- | Plataforma de Leitura Acessível

> Um leitor de documentos PDF focado em inclusão digital, projetado especificamente para quebrar barreiras de comunicação para utilizadores com deficiências visuais, auditivas e audiovisuais.

Este projeto é uma aplicação web moderna que combina tecnologias de renderização de documentos com ferramentas assistivas de ponta, permitindo que a informação digital seja consumida de forma autónoma por qualquer pessoa.

---

## ♿ Recursos de Acessibilidade Implementados

A aplicação foi estruturada desde a raiz para garantir uma experiência de uso universal:

* **🤟 Integração com VLibras:** Incorporação nativa do widget VLibras, traduzindo conteúdos de texto digitais para a Língua Brasileira de Sinais (LIBRAS) através de avatares 3D.
* **⌨️ Navegação Completa via Teclado:** Elementos de interface interativos (como a zona de upload) adaptados com `tabIndex` e manipuladores de eventos (`onKeyDown`) para operar sem o uso do rato.
* **🗣️ Otimização para Leitores de Ecrã:** 
  * Uso de áreas dinâmicas (`aria-live="polite"`) que anunciam atualizações de estado (ex: "Arquivo carregado com sucesso") para utilizadores cegos.
  * Ocultação de elementos puramente visuais (`aria-hidden="true"`) para evitar ruído na leitura assistiva.
  * Camada de texto ativa (`renderTextLayer={true}`) no motor do PDF para permitir a seleção, cópia e leitura de texto em tempo real por softwares como NVDA ou JAWS.

---

## 🚀 Tecnologias e Dependências

* **React & Next.js (App Router):** Estrutura base da aplicação com componentes do lado do cliente (`"use client"`).
* **TypeScript:** Tipagem estática para um código mais seguro e livre de erros em tempo de execução.
* **Tailwind CSS:** Estilização responsiva e moderna com paleta de cores escura e de alto contraste (`bg-[#0F172A]`).
* **React PDF (`react-pdf`):** Motor de renderização e processamento de arquivos PDF diretamente no navegador recorrendo a Web Workers dedicados.
* **React Icons:** Biblioteca de ícones vetoriais acessíveis.

---

## 📂 Estrutura de Componentes Analisada

O núcleo do projeto divide-se em três pilares principais:
1. `Home (page.tsx)`: Onde a estrutura principal, o cabeçalho e o layout de alto contraste são consolidados.
2. `VLibras.tsx`: Componente injetável que carrega assincronamente os scripts oficiais do governo brasileiro para acessibilidade de intérprete virtual.
3. `LeitorPdf.tsx`: Componente de upload dinâmico e renderização sequencial de páginas PDF com suporte a scroll assistido.

---

## ⚙️ Como Executar o Projeto Localmente

### 1. Clonar o repositório
```bash
git clone https://github.com
cd LeitorPdf-
```

### 2. Instalar as dependências
```bash
npm install
```

### 3. Iniciar o servidor de desenvolvimento
```bash
npm run dev
```
Abra o endereço [http://localhost:3000](http://localhost:3000) (ou a porta indicada pelo seu terminal Next.js/Vite) no seu navegador.

---

## 🛠️ Próximos Passos (Roadmap de Acessibilidade)

* [ ] **Text-to-Speech (TTS):** Integração com a `Web Speech API` para leitura de páginas inteiras com comandos de voz.
* [ ] **Controlo de Zoom Acessível:** Botões grandes e mapeados por atalho de teclado para ampliação de texto sem distorção.
* [ ] **Temas Alternativos:** Modo de alto contraste acentuado (Texto Amarelo em Fundo Preto) para utilizadores com baixíssima acuidade visual.

---

## 🤝 Como Contribuir

Se deseja melhorar os algoritmos de leitura de texto ou refinar os seletores ARIA:
1. Faça um **Fork** do repositório.
2. Crie uma branch para a sua funcionalidade (`git checkout -b feature/melhoria-acessivel`).
3. Abra um **Pull Request** detalhando o impacto positivo da sua alteração.

---

## 📄 Licença

Este projeto está licenciado sob a licença MIT.

---
Desenvolvido com o compromisso de tornar a web um lugar para todos por [RuiGomes111](https://github.com).
