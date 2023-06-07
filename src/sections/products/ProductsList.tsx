import { useSearchProducts } from "../../modules/business/useSearchProducts";
import { createProductRepository } from "../../modules/infrastructure/ApiProductRepository";
import { ProductCard } from "./ProductCard";
import styles from "./ProductsList.module.scss";

const repository = createProductRepository();


export function ProductsList() {
const {products} = useSearchProducts(repository);
    return (
        <main className={styles.main}>
            {
            products? 
                <article className={styles.main__productsList}>
                    {
                        products.map((v) => (
                            <ProductCard 
                                id={v.id}
                                title={v.title} 
                                image_url={v.image_url} 
                                price={v.price} 
                                rating={v.rating} 
                                offer={v.offer}
                                available={v.available}
                                sales={v.sales} />
                            )
                        )
                    }
                </article>
                :
                <h2>No hay productos</h2>
            }
        </main>
    );

}