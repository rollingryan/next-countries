This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Stack

- Next.js is built on top of [Next.js](https://nextjs.org/)
- Typescript
- [Material UI](https://mui.com/material-ui/getting-started/installation/) for the components library
- [Emotion](https://emotion.sh/docs/styled) for the styling (what styled-components uses under the hood)
- [Axios](https://axios-http.com/) for the API calls

## Getting Started

### First, ensure your environment is set up correctly

This project uses `node@15.14.0`, `npm@7.7.6`.

### Next, run the development server

```bash
npm ci
# then
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### These other useful commands also available

```bash
# Unit tests
npm run test
npm run test:watch

# e2e tests
npm run test:cypress:open
npm run test:cypress:run
```

## Improvement notes

- Unit/Integration tests could still be improved drastically by mocking the API calls and provider.
- Cypress testing could be cleaned up to make the files more readable.
- Adding cypress to CI would be a good idea.
- Lazy loading the countries list in batches.
- "Skeleton" loading of the cards and details page would be cool.
