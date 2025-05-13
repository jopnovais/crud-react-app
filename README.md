# 📈 Monitor de Ações

Aplicação React para acompanhar ações da bolsa em tempo real, utilizando a API da [Alpha Vantage](https://www.alphavantage.co/).

## ✨ Funcionalidades

- ✅ Adicionar ações por símbolo (ex: `AAPL`, `MSFT`, `PETR4.SA`)
- ✅ Visualizar informações como:
  - Preço atual
  - Variação percentual
  - Alta e baixa do dia
  - Volume de negociação
  - Setor de atuação
- ✅ Atualização manual dos dados
- ✅ Atualização automática ao adicionar
- ✅ Animação de carregamento ao buscar dados
- ✅ Remoção de ações da lista
- ✅ Modo claro e escuro com toggle
- ✅ Salvamento da preferência de tema com Local Storage

---

## 🚀 Como rodar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/nome-do-projeto.git
cd nome-do-projeto
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure a variável de ambiente

Crie um arquivo `.env` na raiz do projeto com o seguinte conteúdo:

```env
REACT_APP_API_KEY=TFH54T3CWRLN4X3G
```

> 🔐 Substitua pela sua chave, que pode ser obtida gratuitamente em [Alpha Vantage](https://www.alphavantage.co/support/#api-key)

### 4. Inicie o servidor de desenvolvimento

```bash
npm start
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

---

## 📁 Estrutura do Projeto

```
📦 src
├── 📄 App.js
├── 📄 index.js
├── 📄 StockForm.js
├── 📄 StockList.js
├── 📄 useDarkMode.js
├── 📄 index.css
```

---

## 🛠 Tecnologias Utilizadas

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Axios](https://axios-http.com/)
- [Alpha Vantage API](https://www.alphavantage.co/)
- [Local Storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

---

## 🔒 Boas práticas

- 🔐 A chave da API está armazenada no `.env`
- 🚫 O `.env` está incluído no `.gitignore` para não ser versionado

---

## 🧪 Scripts úteis

```bash
npm start       # Executa o app em modo de desenvolvimento
npm run build   # Gera a versão de produção
```

---

## 💻 Screenshot

Veja como o app aparece em execução:

![Monitor de Ações](./Screenshot_acoes.png)

---

## 📄 Licença

MIT © [João Pedro Novais](https://github.com/jopnovais)
