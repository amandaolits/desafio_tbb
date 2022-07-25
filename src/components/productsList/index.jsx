import Product from "../product";

function ProductsList({ products, filteredProducts }) {
  return (
    <section>
      {filteredProducts.length === 0
        ? products.map((product) => {
            return (
              <Product
                key={product.id}
                product={product}
              />
            );
          })
        : filteredProducts.map((product) => {
            return (
              <Product
                key={product.id * 2}
                product={product}
              />
            );
          })}
    </section>
  );
}
export default ProductsList;
