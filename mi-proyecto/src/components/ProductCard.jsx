function ProductCard({
  image,
  category,
  name,
  price,
  oldPrice,
  badge,
}) {
  return (
    <article className="product-card">

      <div className="product-image-container">

        {badge && (
          <span className="product-badge">
            {badge}
          </span>
        )}

        <img
          src={image}
          alt={name}
          className="product-image"
        />

      </div>

      <div className="product-info">

        <span className="product-category">
          {category}
        </span>

        <h3>{name}</h3>

        <div className="product-price">
          <strong>{price}</strong>

          {oldPrice && (
            <span className="old-price">
              {oldPrice}
            </span>
          )}
        </div>

        <button className="buy-button">
          🛒 Comprar
        </button>

      </div>

    </article>
  )
}

export default ProductCard