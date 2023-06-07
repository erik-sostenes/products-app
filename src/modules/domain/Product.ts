// Sales represents a Entity
export interface Sales {
    days: number;
    amount: number;
}

// Product represents a Entity
export interface Product {
    id: string;
    title: string;
    image_url: string;
    price: number;
    rating: number;
    offer: boolean;
    available: boolean;
    sales: Sales;
}