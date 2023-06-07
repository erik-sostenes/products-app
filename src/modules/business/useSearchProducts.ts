import { useEffect, useState } from "react";
import { ProductRepository } from "../domain/ProductRepository";
import { Product } from "../domain/Product";

export function useSearchProducts(repository: ProductRepository) {
    const [products, setProducts] = useState<Product[] | undefined>([]);

    useEffect(()=> {
        repository.search()
            .then(v => setProducts(v))
    }, [repository])

    return {products}
}