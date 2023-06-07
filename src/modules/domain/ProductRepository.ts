import { Product } from "./Product";

// ProductRepository represents the port on the right side, it contains the methods (contracts) that the adapter must implement
export interface ProductRepository {
    // Search method searchs products
    search: () => Promise<Product[] | undefined>;
}