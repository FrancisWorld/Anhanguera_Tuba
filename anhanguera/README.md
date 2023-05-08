## Dependências
- [NodeJS](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/)
- [MongoDB](https://www.mongodb.com/)

## Instalação

Use o [npm](https://www.npmjs.com/) para instalar todas as dependências do projeto.
Para rodar o projeto é necessário ter o MongoDB instalado e rodando na porta 27017. Para isso, é possível utilizar o [Docker](https://www.docker.com/) para subir um container com o MongoDB.

```bash
npm install
```

## Uso

```bash
npm run dev
```

## Configuração
Crie um arquivo .env na raiz do projeto e adicione as seguintes variáveis de ambiente:
```
MONGODB_URI=<string>
MONGODB_DB=<string>
```

## Documentação
https://nextjs.org/docs
https://mongoosejs.com/docs/guide.html

## Contribuição

Pull requests são bem-vindos. Para grandes mudanças, abra um problema primeiro para discutir o que você gostaria de mudar.

Certifique-se de atualizar os testes conforme apropriado.

```bash
# Clone o repositório
$ git clone
```

## Docker

O projeto usa next-auth para autenticação, para isso é necessário criar um arquivo .env.local na raiz do projeto e adicionar as seguintes variáveis de ambiente:
```
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=<string>
JWT_SECRET=<string>
```
Para rodar o projeto é necessário ter o MongoDB instalado e rodando na porta 27017. Para isso, é possível utilizar o Docker para subir um container com o MongoDB.
```
docker run --name mongodb -p 27017:27017 -d mongo
```