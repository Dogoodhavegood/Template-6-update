import { client } from "@/sanity/lib/client"

export interface Product {
    _id: string;
    title: string;
    description: string;
    price: number;
    productImageUrl?: string;
    tags: string[];
}

export const getAllProducts = async () => {

    try {
        const queryAllProduct = `*[_type == "product"] {_id, title, description, price, tags, "productImageUrl": productImage.asset->url}`;
        const products = await client.fetch(queryAllProduct);
        return products;

    }

    catch (error) {
        console.log(error);
    }

}