# Projeto IgmaChallenge
Consiste em uma simples API que permite o registro de usuários.

<p align="center">
  <img  src="https://s3.sa-east-1.amazonaws.com/remotar-assets-prod/company-profile-pictures/clckmivxl005j04w68vyd1nt3.jpg" height="220px">
</p>
<h1 align="center">
  IgmaChallenge
</h1>
<div align="center">

  <h3>Built With</h3>
  <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" height="30px"/>  
  <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express.js&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/Prisma-316192?style=for-the-badge&logo=prisma&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/Jest-316192?style=for-the-badge&logo=jest&logoColor=white" height="30px"/>
</div>

# Description

Nesse desafio foi proposto a criação de uma API que permitisse o registro de pessoas, informando o nome, a data de nascimento e o cpf.
O cpf do usuário deveria ser validado antes de ser registrado no banco de dados.

## Features

-   Add user.
-   Get user by cpf.
-   Get all users.

</br>

### Add person

```
http://localhost:5000
POST /register
```

#### Request:

| Body        | Type     | Description                 |
| :---------- | :------- | :-------------------------- |
| `name`      | `string` | **Required**. user name     |
| `cpf`       | `string` | **Required**. user cpf      |
| `birthday`  | `string` | **Required**. user birthday |

`
birthday format YYYY-MM-DD
`

####

#### Response:

```json
message: User successfully registered!
status: 201
```

####

#

### Get user by cpf

```
http://localhost:5000
GET /user?cpf=
```

#### Request:

| Params  | Type     | Description            |
| :------ | :------- | :--------------------- |
| `cpf`   | `string` | **Required**. user cpf |

#### Response:

```json
{
  "id": 11,
  "name": "fulano",
  "cpf": "474.107.437-43",
  "birthday": "2002-10-09T00:00:00.000Z"
}
```

### Get all users

```
http://localhost:5000
GET /users
```

#### Request:

| Params  | Type   | Description              |
| :------ | :----- | :----------------------- |
| `page`  | `int` | **Optional**. page number |

#### Response:

```json
With page informed
[
  {
    "id": 3,
    "name": "fulano",
    "cpf": "111.444.777-35",
    "birthday": "1999-08-12T03:00:00.000Z"
  },
  {
    "id": 5,
    "name": "fulano",
    "cpf": "425.187.510-92",
    "birthday": "2023-02-03T16:52:28.294Z"
  },
  {
    "id": 6,
    "name": "fulano",
    "cpf": "744.380.568-37",
    "birthday": "2002-10-09T00:00:00.000Z"
  },
  {
    "id": 7,
    "name": "fulano",
    "cpf": "814.308.175-34",
    "birthday": "2002-10-09T00:00:00.000Z"
  },
  {
    "id": 8,
    "name": "fulano",
    "cpf": "256.568.489-49",
    "birthday": "2002-10-09T00:00:00.000Z"
  }
]
```

```json
When no page is informed
[
  {
    "id": 1,
    "name": "Fulano de tal",
    "cpf": "11144477735",
    "birthday": "1999-11-09T00:00:00.000Z"
  },
  {
    "id": 2,
    "name": "Cicrano",
    "cpf": "47410743743",
    "birthday": "1998-12-28T00:00:00.000Z"
  },
  {
    "id": 3,
    "name": "Beltrano",
    "cpf": "14438583314",
    "birthday": "1989-05-14T00:00:00.000Z"
  },
  {
    "id": 4,
    "name": "Gol D. Roger",
    "cpf": "87649293378",
    "birthday": "1978-07-07T00:00:00.000Z"
  },
  {
    "id": 5,
    "name": "Aruka",
    "cpf": "48312863893",
    "birthday": "2001-08-21T00:00:00.000Z"
  },
  {
    "id": 6,
    "name": "Kaguya",
    "cpf": "58325407433",
    "birthday": "1979-09-11T00:00:00.000Z"
  },
  {
    "id": 7,
    "name": "Suzumyia Haruno",
    "cpf": "18812192670",
    "birthday": "2003-11-11T00:00:00.000Z"
  },
  {
    "id": 8,
    "name": "Monkey D. Luffy",
    "cpf": "12448151105",
    "birthday": "2004-11-12T00:00:00.000Z"
  },
  {
    "id": 9,
    "name": "Katakuri",
    "cpf": "86592895799",
    "birthday": "1977-05-01T00:00:00.000Z"
  },
  {
    "id": 10,
    "name": "Raiden",
    "cpf": "529.982.247-25",
    "birthday": "1976-03-14T00:00:00.000Z"
  },
  {
    "id": 11,
    "name": "D. Pedro II",
    "cpf": "297.679.147-30",
    "birthday": "1825-12-02T00:00:00.000Z"
  }
]
```

## Environment Variables

PORT

DATABASE_URL

#

## Run

#

## Run Locally

Clone the project

```bash
  git clone https://github.com/FKnight-cyber/IgmaChallenge.git
```

Install packages

```bash
  npm i
```

Configure .env

Start server

```bash
  npm run dev
```
#

## Tests

configure .env.test

Run all tests

```bash
  npm test
```

Run integration tests

```bash
  npm run test:integration
```

Run unit tests

```bash
  npm run test:unit
```

## Authors

-   Ryan Nicholas a developer looking for new challenges!.
<br/>

#
