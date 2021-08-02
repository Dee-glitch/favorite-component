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
              // src={product.currentVariant.images.front}
              src={
                'https://images.aceandtate.com/image/upload/ar_0.8,c_crop/h_600,c_scale/:spree/public/spree/products/5016/original/hudson-tiger-wood-sun-FACE-m.jpg'
              }
            />
            <div>
              <h2>{product.name}</h2>
              <p>{product.currentVariant.displayAttributes.color}</p>
              <div onClick={() => props.handleFavoritesClick(product)}>
                <FaHeart style={{ color: 'white' }} className="icon" />
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ProductList;
