-- remove databases if exists
DROP DATABASE IF EXISTS bamazon_db;
-- create teh table
CREATE DATABASE bamazon_db;

-- drop tables
use bamazon_db;
drop table cartitems;
drop table carts;

use bamazon_db;
drop table products;
drop table departments;