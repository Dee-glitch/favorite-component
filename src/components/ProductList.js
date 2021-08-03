import { useContext } from 'react';
import { FaHeart } from 'react-icons/fa';
import { ProductContext } from '../context/GlobalContext';

const ProductList = () => {
  const { products, isFavorite, addFavoriteProduct } =
    useContext(ProductContext);

  const getImages = (product) => {
    const imageObj = product.currentVariant.images;
    const imageProp = Object.keys(imageObj)[0];
    return imageObj[imageProp].url;
  };

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
              <div onClick={() => addFavoriteProduct(product)}>
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
