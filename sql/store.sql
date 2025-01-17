CREATE SCHEMA store;

USE store;

CREATE TABLE customer (
  PK_Customer INT NOT NULL AUTO_INCREMENT,
  DateTimeInsert TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FirstName VARCHAR(30) NOT NULL,
  LastName VARCHAR(50) NOT NULL,
  Genre VARCHAR(1) NOT NULL,
  BirthDate DATETIME NULL,
  PRIMARY KEY (PK_Customer)
) ENGINE = InnoDB;

CREATE TABLE adresses (
  PK_Address INT NOT NULL AUTO_INCREMENT,
  DateTimeInsert TIMESTAMP NOT NULL,
  FK_Customer INT NOT NULL,
  Address VARCHAR(255) NOT NULL,
  Number VARCHAR(5) NOT NULL,
  Neighborhood VARCHAR(60) NOT NULL,
  City VARCHAR(255) NOT NULL,
  Complement VARCHAR(255) NULL,
  UF VARCHAR(2) NOT NULL,
  TypeAddress ENUM('Entrega', 'Cobranca') NOT NULL DEFAULT 'Entrega',
  PRIMARY KEY (PK_Address),
  FOREIGN KEY (FK_Customer) REFERENCES customer (PK_Customer)
  ) ENGINE = InnoDB;

CREATE TABLE contacts (
  PK_Contact INT NOT NULL AUTO_INCREMENT,
  DateTimeInsert TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FK_Customer INT NOT NULL,
  ContactName VARCHAR(60) NULL,
  Phone VARCHAR(15) NOT NULL,
  Email VARCHAR(100) NULL,
  PRIMARY KEY (PK_Contact),
  FOREIGN KEY (FK_Customer) REFERENCES customer (PK_Customer)
  ) ENGINE = InnoDB;

CREATE TABLE products (
  PK_Product INT NOT NULL AUTO_INCREMENT,
  DateTimeInsert TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  Description VARCHAR(255) NOT NULL,
  Unit VARCHAR(5) NOT NULL,
  BarCode VARCHAR(15) NULL,
  UnitaryValue DECIMAL(15,2) NOT NULL,
  PRIMARY KEY (PK_Product)
  ) ENGINE = InnoDB;

CREATE TABLE sales_order (
  PK_Order INT NOT NULL AUTO_INCREMENT,
  DateTimeInsert TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FK_Customer INT NOT NULL,
  OrderCode VARCHAR(15) NULL,
  OrderDate DATETIME NULL,
  Status ENUM('Pendente', 'Confirmado', 'Cancelado') NOT NULL DEFAULT 'Pendente',
  Discount DECIMAL(15,2) NOT NULL DEFAULT '0.00',
  Addition DECIMAL(15,2) NOT NULL DEFAULT '0.00',
  Amount DECIMAL(15,2) NULL,
  PRIMARY KEY (PK_Order),
  FOREIGN KEY (FK_Customer) REFERENCES customer (PK_Customer)
) ENGINE = InnoDB;

CREATE TABLE sales_order_item (
  PK_OrderItem INT NOT NULL AUTO_INCREMENT,
  DateTimeInsert TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FK_Order INT NOT NULL,
  FK_Product INT NOT NULL,
  Quantity DECIMAL(15,2) NOT NULL,
  ProductValue DECIMAL(15,2) NOT NULL,
  PRIMARY KEY (PK_OrderItem),
  FOREIGN KEY (FK_Order) REFERENCES sales_order (PK_Order),
  FOREIGN KEY (FK_Product) REFERENCES products (PK_Product)
) ENGINE = InnoDB;
