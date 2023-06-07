import { Product } from "../domain/Product";
import { ProductRepository } from "../domain/ProductRepository";
import { data } from "./DataProduct";

// createProductRepository returns an instance of ProductRepository
export function createProductRepository(): ProductRepository {
    return {
        search,
    }
}

// search searches for all products, takes care of the http request 
async function search(): Promise<Product[] | undefined> {
    return Promise.all(data)
}