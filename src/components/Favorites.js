import { FaHeart } from 'react-icons/fa';

const ProductList = (props) => {
  return (
    <div className="product-list">
      {props.products &&
        props.products.map((product) => (
          <div key={product.id} className="product-container">
            <img
              alt={product.id}
              style={{ width: '200px' }}
              src={product.currentVariant.images.front}
            />
            <div>
              <h2>{product.name}</h2>
              <p>{product.currentVariant.displayAttributes.color}</p>
              <div onClick={() => props.handleFavoritesClick(product)}>
                <FaHeart style={{ color: 'red' }} className="icon" />
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ProductList;
