# cafeShopApp-backend-expressJS

![GitHub repo size](https://img.shields.io/github/repo-size/kemalreza12/cafeShopApp-backend-expressJS)

## General Info
cafeShopApp-backend-expressJS is a backend for dicey-CaffeApp frontend.

## Built With
* [Node.js](https://nodejs.org/en/)
* [Express.js](https://expressjs.com/)

## Requirements
* [Node.js](https://nodejs.org/en/)
* [Database](https://github.com/kemalreza12/cafeShopApp-backend-expressJS/blob/main/dbcaffe.sql)
* [Postman](https://www.postman.com/) for Testing

## NPM Package
* [Bcryptjs](https://www.npmjs.com/package/bcryptjs)
* [Body-parser](https://www.npmjs.com/package/body-parser)
* [Cors](https://www.npmjs.com/package/cors)
* [Dotenv](https://www.npmjs.com/package/dotenv)
* [Express](https://www.npmjs.com/package/express)
* [Jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
* [Morgan](https://www.npmjs.com/package/morgan)
* [Multer](https://www.npmjs.com/package/multer)
* [Mysql](https://www.npmjs.com/package/mysql)
* [Redis](https://www.npmjs.com/package/redis)


## Installation

Clone this repository and then use the package manager npm to install dependencies.
```
npm install
```

## Setup .env example

Create or edit .env file in your root project folder.

```env

DB_HOST = localhost
DB_USER = your_database_username
DB_PASSWORD = your_database_password
DB_DATABASE = dbcaffe
PORT = 8000
SECRET_KEY = your_secret_key

```

### Run project for development
```
npm run dev
```

### API documentation link

See [Documentation API](https://www.getpostman.com/collections/cad45b669302e594c688)


## License
[MIT](https://choosealicense.com/licenses/mit/