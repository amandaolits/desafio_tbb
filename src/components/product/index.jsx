import './styles.css'

function Product({product}) {
  return (
      <div className='product-card'>
          <div className='image'>
              <img src={product.images[0].asset.url} alt={product.images[0].alt} />
          </div>
          <div>
              <h3>{product.name}</h3>
              <span>{product.category.name}</span>
          </div>
      </div>
  )
}

export default Product;