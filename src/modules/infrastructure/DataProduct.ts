import { Product } from "../domain/Product";

export const  data: Product[] = [
    {
        "id": "a5775e05-1920-4be0-bccd-9d830149f20d",
        "title": "Pitahaya Roja",
        "image_url": "https://media.justo.mx/__sized__/products/Pitahaya_Roja-thumbnail-255x255-70.jpg",
        "price": 478,
        "rating": 3.0,
        "offer": false,
        "available": true,
        "sales": {
            "days": 60,
            "amount": 1000.0
        }
    },
    {
        "id": "a5775e05-1920-4be0-bccd-9d830149f20d",
        "title": "Mango manilla",
        "image_url": "https://media.justo.mx/__sized__/products/FRUTAS_10641_Mango_manila_1-thumbnail-255x255-70.jpg",
        "price": 478,
        "rating": 3.0,
        "offer": true,
        "available": false,
        "sales": {
            "days":  60,
            "amount": 1000
        }
    },
    {
        "id": "a5775e05-1920-4be0-bccd-9d830149f20d",
        "title": "Jitomate Saladette",
        "image_url": "https://media.justo.mx/__sized__/products/VERDURAS_10698_Jitomate_Saladette_1-thumbnail-255x255-70.jpg",
        "price": 478,
        "rating": 3.0,
        "offer": false,
        "available": false,
        "sales": {
            "days": 60,
            "amount": 1000
        }
    },
    {
        "id": "a5775e05-1920-4be0-bccd-9d830149f20d",
        "title": "Aguacate_Hass",
        "image_url": "https://media.justo.mx/__sized__/products/Aguacate_Hass-thumbnail-255x255-70.jpg",
        "price": 478,
        "rating": 3.0,
        "offer": true,
        "available": true,
        "sales": {
            "days": 60, 
            "amount": 1000
        }
    }
];