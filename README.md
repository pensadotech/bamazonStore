# bamazon

By Armando Pensado 

## Description

The application is a pretend online store. The application was made using Node JS, sequlize (ORM), and mysql2 libraries. The application uses a MySql database. 

The application includes html and API routes to work with the screen, adding department and products, and present an available product list in the store front. The user can select the items and quantity, adding them into a shopping cart. 

After selecting the desired products, the user can view the shopping cart, can decide to put the order, return to shop for additional items, and simply remove the shopping cart.

![Start](./docs/1.Store.png)

# How does it work

The application shows an empty store. The user needs to enter several departments, and after that, products. Each product will be associated with a department. The system will not allow to enter products unless, at least one department exist.

Having departments and products, the main page, which is the store, will present the possible products to select. The user can filter the products by department, and by selecting the desired quantity can add the product to the shopping cart.

Having all desired products in the shopping cart, the user can hit the button “View Cart”, as a wau to proceed to check out. In here the customer can remove items, and place the order.

The following images provide a glance to the application.

#### Store
![Start](./docs/1.Store.png)

#### Departments
![deptms](./docs/2.depts.png)

#### Products
![deptms](./docs/3.products.png)

#### Shoping Cart
![cart](./docs/4.shopingCart.png)

## Who can benefit from this application

This application is beneficial for NodeJS developer, providing sample programming structures using JavaScript, and using **Express**, **MySql**, **seqelize (ORM)**, and custom-made modules that encapsulate the logic to access teh database.


## How developers can get started

To start, the developer must have NodeJS installed in the computer. After, that the project can be cloned and initialized.  Here are the steps for getting started.

1. Install MySql in your local computer, or have one remote MySql datbase available.

2. Install NodeJS into the computer  (https://nodejs.org/en/). Download button and run through the installation file.

3. Clone or Fork the project into the computer.

4. In the folder project, Make a `.gitignore` file using https://www.gitignore.io/, selecting the key words for teh OS, node, and visual code (e.g. Windows, visual code, node). This will tell git not to track these files specified in the contents, and thus they won't be committed to Github.

5. Bring all external module dependencies using the command:

```js
npm i
```

After, the initialization, and using Microsoft Visual Code, the project folder should resemble as depicted below, and should be ready for execution.

![layout](./docs/5.vcode.png)

6. It is necesary to add a folder "config" and inside a "config.json" file. This will have a structure as depicted bellow. 

* For the database use "bamazon_db".
* For a local MySql database use "127.0.0.1"

```js
{
  "development": {
    "username": "<your-ID>",
    "password": "<your-pwd>",
    "database": "<database-name>",
    "host": "<your-server>",
    "port": "<tcp port>",
    "dialect": "mysql"
  },
  "test": {
    "username": "<your-ID>",
    "password": "<your-pwd>",
    "database":  "<database-name>",
    "host": "127.0.0.1",
    "port": "<tcp port>",
    "dialect": "mysql"
  },
  "production": {
    "username": "<your-ID>",
    "password": "<your-pwd>",
    "database": "<database-name>",
    "host": "<your-server>",
    "port": "<tcp port>",
    "dialect": "mysql"
  }
}

```

The project offers a SQl filed "bamazon.sql" that offer code to create the database the first time. This must be done form the MySQL Workbench. Execute the following commands.

```sql
-- remove databases if exists
DROP DATABASE IF EXISTS bamazon_db;
-- create teh table
CREATE DATABASE bamazon_db;
```

once the databse is set up, launch the server, using one of teh two commands. That last one is in case the NODEMON nmp was installed (npm install -g nodemon).

```js

node server.js

or

nodemon

```

## Who maintains and contributes to the project

This is a personal project based on UCI Bootcamp training. 


## Where users can get help with the project

The developer can refer to the following links:


* NodeJs  : https://nodejs.org/en/
* Express : https://www.npmjs.com/package/express
* seqeize : https://www.npmjs.com/package/sequelize


