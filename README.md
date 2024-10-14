# 💼 Salário CLT x PJ

Este projeto é uma aplicação web desenvolvida com [Next.js](https://nextjs.org/), onde você pode comparar os ganhos entre regime de contratação CLT e PJ (Pessoa Jurídica). Utilizamos o [TailwindCSS](https://tailwindcss.com/) para a estilização e recursos de React para a criação dos componentes da interface.

## 📦 Instruções de Instalação

Siga as etapas abaixo para rodar o projeto em sua máquina:

### ⚙️ Requisitos

- ✅ Node.js (versão 14 ou superior)
- ✅ npm ou yarn como gerenciador de pacotes

### 📥 Passos para instalar

1. **Clone o repositório**:

   ```sh
   git clone <URL_DO_REPOSITORIO>
   cd salario-clt-pj
   ```

2. **Instale as dependências do projeto**:

   Com npm:
   ```sh
   npm install
   ```
   Ou com yarn:
   ```sh
   yarn install
   ```

3. **Execute o projeto em ambiente de desenvolvimento**:

   Com npm:
   ```sh
   npm run dev
   ```
   Ou com yarn:
   ```sh
   yarn dev
   ```

4. **Abra [http://localhost:3000](http://localhost:3000) no navegador** para visualizar a aplicação.

### 📜 Scripts disponíveis

- `dev`: Executa a aplicação em modo de desenvolvimento.
- `build`: Compila a aplicação para produção.
- `start`: Executa a versão de produção do aplicativo.

### 🔧 Configurações adicionais

- As fontes utilizadas (GeistMonoVF e GeistVF) estão localizadas na pasta `src/app/fonts` e já estão incluídas no projeto.
- Para ajustar as cores e o tema da aplicação, você pode modificar os arquivos relacionados ao tema (`theme-provider.tsx`, `theme-toggle.tsx`) na pasta `src/components`.

## 🗂️ Estrutura do Projeto

- `src/app`: Contém os arquivos principais da aplicação, como `layout.tsx`, `page.tsx` e arquivos de estilo.
- `src/components`: Inclui componentes reutilizáveis como botões, inputs e componentes de temas.
- `public`: Inclui arquivos públicos, como o `favicon.ico`.

## 🛠️ Tecnologias Utilizadas

- ⚡ [Next.js](https://nextjs.org/)
- 🎨 [TailwindCSS](https://tailwindcss.com/)
- 📘 [TypeScript](https://www.typescriptlang.org/)
- 🖌️ [Shadcn](https://ui.shadcn.com/)

## 🤝 Contribuição

Sinta-se à vontade para fazer um fork deste repositório e sugerir melhorias por meio de pull requests.

## 📄 Licença

Este projeto é distribuído sob a licença MIT. Para mais detalhes, consulte o arquivo `LICENSE`.