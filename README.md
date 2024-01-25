This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

´´´jsx-runtime`to the`extends` list

### Desafio 04 - Adicionando features ao Ignite Shop

💜

# Sobre o desafio

- um carrinho que utilizará os dados da API do Stripe para buscar os itens existentes, e controlará, através da sua aplicação, o número de itens que a pessoa deseja comprar.

- Você utilizará a listagem já criada pela aplicação, mas adicionará a possibilidade de adicionar aquele item ao carrinho na página do produto.
- Salvar todos os itens selecionados em sua aplicação, e exibir o número de itens no carrinho
- Enviar o carrinho que você armazenou na aplicação para a rota de checkout, onde irá gerar a sessão de checkout com os `line_items` necessários.

Para completar esse desafio você vai precisar de realizar algumas pesquisas para entender sobre a API do Stripe.

# Layout da aplicação

### Acessando o layout do app

# Desenvolvendo o projeto

Para desenvolver esse projeto, você utilizará a aplicação base desenvolvida durante a aula.

Para armazenar os itens no carrinho, você pode fazer isso da maneira que preferir, por exemplo utilizando uma Context API para salvar os itens, ou utilizar a biblioteca [use-shopping-cart](https://www.npmjs.com/package/use-shopping-cart) que já possui diversas facilitações para essa lógica.

Você pode encontrar mais sobre o use-shopping cart [**clicando aqui.**](https://useshoppingcart.com/docs/welcome/getting-started-serverless)

<aside>
⚠️ Atenção: Apesar de você conseguir realizar isso da maneira que preferir, é importante seguir sempre a [documentação do stripe](https://stripe.com/docs/api/checkout/sessions/create) para enviar os dados de checkout com o formato correto.

</aside>

Caso você tenha alguma dificuldade você pode ir no nosso **[fórum](https://app.rocketseat.com.br/h/forum/react-js)** e deixar a sua dúvida por lá!

Após terminar o desafio, caso você queira, você pode tentar dar o próximo passo e deixar a aplicação com a sua cara. Tente mudar o layout, cores ou até adicionar novas funcionalidades para ir além 🚀

# Entrega

Após concluir o desafio, você deve enviar a URL do seu código no GitHub para a plataforma.

Além disso, que tal fazer um post no LinkedIn compartilhando o seu aprendizado e contando como foi a experiência?

É uma excelente forma de demonstrar seus conhecimentos e atrair novas oportunidades! 😍

Obs: Se você se sentir à vontade, pode postar um print do resultado final e nos marcar!
Será incrível acompanhar a sua evolução! 💜

Feito com 💜 por Rocketseat 👋
