import { FaHeart } from 'react-icons/fa';
import { useContext } from 'react';
import { ProductContext } from '../context/GlobalContext';

const Favorites = () => {
  const { favorites, removeFavoriteProduct } = useContext(ProductContext);

  const getImages = (product) => {
    const imageObj = product.currentVariant.images;
    const imageProp = Object.keys(imageObj)[0];
    return imageObj[imageProp].url;
  };
  return (
    <div className="product-list">
      {favorites &&
        favorites.map((fav) => (
          <div key={fav.id} className="product-container">
            <img alt={fav.id} style={{ width: '200px' }} src={getImages(fav)} />
            <div>
              <h2>{fav.name}</h2>
              <p>{fav.currentVariant.displayAttributes.color}</p>
              <div onClick={() => removeFavoriteProduct(fav)}>
                <FaHeart style={{ color: 'red' }} className="icon" />
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Favorites;
