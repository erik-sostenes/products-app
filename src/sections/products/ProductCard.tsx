import { Product } from "../../modules/domain/Product";
import styles from "./ProductCard.module.scss";

export function ProductCard({ id, title, image_url, price, rating, offer, available, sales}: Product) {
    return (
        <section key={id} className={styles.main__productCard}>
            <div className={styles.main__imageContainer}>
                <figure>
                    <img src={image_url} alt={title}/>
                </figure>
                <div className={styles.main__title}>
                    <span>{title}</span>
                </div>
            </div>
            {
                offer? 
                    <div className={styles.main__offerDay}>Oferta del día</div>
                    : <div></div>
            }
            {
                available? 
                    <div className={styles.main__isAvailable}>No esta disponible</div>
                    : <div></div>
            }
            <div className={styles.main__body}>  
                <div className={styles.main__price}>
                    <span>${price}</span>
                </div>
                <div className={styles.main__containerRating}>
                    <span>Calificación: {rating}</span>
                </div> 
            </div>
            <div>
                <p>Ventas en los últimos {sales.days} días: <strong>{sales.amount}+</strong></p>
            </div>
        </section>
    )
}