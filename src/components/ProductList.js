import { useContext } from 'react';
import { FaHeart } from 'react-icons/fa';
import { ProductContext } from '../context/GlobalContext';
import { getImages } from './helpers';

const ProductList = () => {
  const { products, isFavorite, addFavoriteProduct, removeFavoriteProduct } =
    useContext(ProductContext);

  return (
    <div className="product-list">
      {products &&
        products.map((product) => (
          <div key={product.id} className="product-container">
            <img
              alt={product.id}
              style={{ width: '300px' }}
              src={getImages(product)}
            />
            <div>
              <h2>{product.name}</h2>
              <p>{product.currentVariant.displayAttributes.color}</p>
              <div
                onClick={() =>
                  isFavorite(product)
                    ? removeFavoriteProduct(product)
                    : addFavoriteProduct(product)
                }
              >
                <FaHeart
                  style={{ color: isFavorite(product) ? 'red' : 'white' }}
                  className="icon"
                />
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ProductList;
