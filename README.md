# Teste de Leitura e Escrita  usando o Node.js
Projeto para testes de leitura e escrita de arquivos no Node.js
Utilizando requisições API 

## Routers

### Get `/help`

### Response: Status 200

Retorna este mesmo arquivo.

---
### Get `/user`

### Response: Status 200

```json
{
	"data": [
		{
			"id": 1,
			"name": "Nataniel Fiuza",
			"email": "n@taniel.com.br",
			"phone": "+55 83 996812716",
			"createdAt": "Sat, 29 Jan 2022 21:46:29 GMT"
		}		
	],
	"previousPage": null,
	"nextPage": null,
	"page": 1
}
```

---
### Post `/user`

### Regras:
- `name`: Nome do usuário
- `email`: E-mail do usuário
- `phone`: Telefone do usuário
  
```json
{
	"name": "Nataniel Fiuza",
	"email": "n@taniel.com.br",
	"phone": "+55 83 996812716"
}

```
### Response: Status 201 Created

Retorna o registro com id (auto incremento) e createdAt (data de criação do registro)

```json
{
	"id": 1,
	"name": "Nataniel Fiuza",
	"email": "n@taniel.com.br",
	"phone": "+55 83 996812716",
	"createdAt": "Sat, 29 Jan 2022 21:46:29 GMT"
}
```
---
## Heroku 

Hospedado no endereço abaixo do Heroku

`https://rwfilesnodejs.herokuapp.com/`

`https://git.heroku.com/rwfilesnodejs.git`

## Cyclic

Hospedado no endereço abaixo do Cyclic

https://nice-blue-cheetah-sari.cyclic.app


## Insomnia

Execute os teste usando o Insomnia com o botão abaixo:

[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=ReadWrite%20File%20API&uri=https%3A%2F%2Fraw.githubusercontent.com%2Fnatanfiuza%2FNodeJs-readwrite-files%2Fmaster%2FInsomnia.json)

## Executar o projeto

```bash
npm start
```

Em desenvolvimento

```bash
npm run dev
```

## Bibliotecas Node.js

Modulos de desenvolvimento

```bash
npm install nodemon jest -D
```
Modulos de produção

```bash
npm install express fs cors
```



