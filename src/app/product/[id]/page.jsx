import { productsList, productsMap } from "../../../data/products";
import ProductDetailsClient from "./ProductDetailsClient";

export async function generateStaticParams() {
    return productsList.map((product) => ({
        id: product.id,
    }));
}

export async function generateMetadata({ params }) {
    const resolvedParams = await params;
    const id = resolvedParams.id;
    const product = productsMap[id] || productsList[0];
    
    return {
        title: `${product.name} | Techlab Scientific Solutions`,
        description: `${product.name} - ${product.description || 'High-quality laboratory equipment from Techlab Scientific Solutions.'}`,
        keywords: `${product.name}, ${product.category}, Techlab Scientific Solutions, analytical instruments, laboratory supplies`,
    };
}

export default async function ProductPage({ params }) {
    const resolvedParams = await params;
    return <ProductDetailsClient id={resolvedParams.id} />;
}
