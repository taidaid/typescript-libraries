import { Product } from "./product.model";
import { validate } from "class-validator";
import "reflect-metadata";
import { plainToClass } from "class-transformer";

const products = [
  { title: "A Carper", price: 30 },
  { title: "A Book", price: 45.5 }
];

const loadedProducts = plainToClass(Product, products);

console.log(loadedProducts);

const newProd = new Product("", -5.99);
validate(newProd).then(errors => {
  if (errors.length > 0) {
    console.error("ERRORS");
    console.error(errors);
  }
  console.log(newProd.getInformation());
});
