# DAO docs preview

This technical documentation is a fork of the official
[API3 technical documentation](https://docs.api3.org). The intent is to develop
dao-related documentation here privately then merge into the official repo when
ready.

## Instructions

To install deps:

```sh
pnpm install
```

and to run in dev mode:

```sh
pnpm run docs:dev
```

## Deployment

Firebase is used to host the `dao-docs` technical documentation. A preview
deployment is generated for every PR, while the main deployment is updated with
every merge to the `main` branch. The url for the main deployment is:
[https://dao-docs.web.app](https://dao-docs.web.app).
