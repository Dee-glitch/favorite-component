import { FaHeart } from 'react-icons/fa';
import { useContext } from 'react';
import { ProductContext } from '../context/GlobalContext';
import { getImages } from './helpers';

const Favorites = () => {
  const { favorites, removeFavoriteProduct } = useContext(ProductContext);
  return (
    <div className="product-list">
      {favorites &&
        favorites.map((fav) => (
          <div key={fav.id} className="product-container">
            <img alt={fav.id} style={{ width: '300px' }} src={getImages(fav)} />
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
