DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;

USE employees_db;

CREATE TABLE departments (
    id INT NOT NULL AUTO_INCREMENT,
    department_name VARCHAR(50)

);

CREATE TABLE roles (
    id INT NOT NULL AUTO_INCREMENT,
    role_name VARCHAR(40),
    department VARCHAR(50),
    salary INT NOT NULL
);

CREATE TABLE employees (
    id INT NOT NULL AUTO_INCREMENT,
    first_name, VARCHAR(30),
    last_name, VARCHAR(50),
    title VARCHAR(30),
    Department VARCHAR(30),
    salary INT NOT NULL,
    manager VARCHAR(50)
);