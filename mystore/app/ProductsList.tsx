import Image from 'next/image';
import { Product } from './product_data';

export default function ProductsList({products} : { products : Product[] }) {
    return (
        <div className="products-list">
            {products.map((product) => (
                <div key={product.id} className="product-card">
                    <h2 className="product-name">{product.name}</h2>
                    <Image
                        src={Array.isArray(product.imageUrl) ? product.imageUrl[0] : product.imageUrl}
                        alt={product.name}
                        className="product-image"
                        width={300}
                        height={300}
                        priority
                        />
                        <p className="product-description">{product.description}</p>
                    <p className="product-price"> ${product.discountPrice ? product.discountPrice.toFixed(2) : product.price.toFixed(2)}</p>
                </div>
            ))}
        </div>
    )
}