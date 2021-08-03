import { FaHeart } from 'react-icons/fa';

const Favorites = ({ products, handleFavoritesClick }) => {
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
              style={{ width: '200px' }}
              src={getImages(product)}
            />
            <div>
              <h2>{product.name}</h2>
              <p>{product.currentVariant.displayAttributes.color}</p>
              <div onClick={() => handleFavoritesClick(product)}>
                <FaHeart style={{ color: 'red' }} className="icon" />
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Favorites;
