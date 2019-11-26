# To Do Application Monorepo

A monorepo for a custom To Do application.

### Setup
To be able to run the development environment, please have the following installed:
* Docker
* Kubernetes
* Skaffold
* Development Cluster Environment (Kubernetes for Desktop Docker or MiniKube)

### Runtime Instructions
To start the application in development mode, run the following commands in the terminal:
```bash
yarn start
```
To view the application, navigate to `http://<KUBERNETES_HOST>/<PATH>`.

Available paths:
* graphql