import { Sequelize } from "sequelize";
import dotenv from 'dotenv'
import Product from "./product.js";
import User from "./user.js";

dotenv.config();
const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
      host: process.env.DB_HOST,
      dialect: process.env.DB_TYPE,
      port: process.env.DB_PORT
  }
);

const ProductModel = Product(sequelize, Sequelize);
const UserModel = User(sequelize, Sequelize);

const db={
  sequelize,
  Sequelize,
  ProductModel,
  UserModel,
}

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
})

export default db;
