# To Do Application Monorepo

A monorepo for a custom to do application.

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

***NOTE:*** *After exiting the skaffold development process, be sure to run `yarn cleanup` to delete lingering resources.*