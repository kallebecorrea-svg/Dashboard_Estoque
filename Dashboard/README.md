# FlowStock — Dashboard de Estoque

O FlowStock é uma interface web de gestão de estoque que reúne, em um só lugar, indicadores e informações sobre produtos. O dashboard foi pensado para ajudar a acompanhar os níveis de estoque e consultar rapidamente os dados mais importantes da operação.

## Sobre o projeto

A tela inicial apresenta cartões com indicadores de produtos, itens com estoque baixo, valor total e fornecedores. Também inclui uma área reservada para gráficos, uma lista de atividades recentes e uma tabela de produtos com categoria, quantidade e situação do estoque.

O menu lateral permite navegar entre as seções Dashboard, Produtos, Estoque, Fornecedores, Movimentações e Configurações. No momento, somente o Dashboard está implementado; as demais opções exibem uma mensagem de que estão em desenvolvimento.

Este projeto é uma demonstração de interface: os indicadores e produtos exibidos estão definidos no próprio código, sem integração com banco de dados ou serviço de backend.

## Tecnologias

- React 19
- Vite 8
- Recharts
- JavaScript e CSS
- ESLint

## Como executar

É necessário ter o Node.js e o npm instalados.

No terminal, acesse a pasta `Dashboard` e instale as dependências:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

O Vite exibirá no terminal o endereço local para abrir no navegador. Para gerar uma versão de produção, execute:

```bash
npm run build
```

Para verificar o código com o ESLint:

```bash
npm run lint
```
