import ProductCard from './ProductCard'

const products = [
  {
    id: 1,
    category: 'Laptops',
    name: 'ProBook X1 Carbon Elite',
    price: '$1,299.00',
    badge: 'Nuevo',
    image:
      'https://images.unsplash.com/photo-1496181133206-80ce9b88a853',
  },
  {
    id: 2,
    category: 'Smartphones',
    name: 'Phone X 256GB',
    price: '$999.00',
    badge: 'Más vendido',
    image:
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9',
  },
  {
    id: 3,
    category: 'Accesorios',
    name: 'Auriculares QuietSound Pro',
    price: '$249.00',
    image:
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e',
  },
  {
    id: 4,
    category: 'Gaming',
    name: 'Controlador Pro Wireless',
    price: '$59.00',
    oldPrice: '$69.00',
    badge: '-15%',
    image:
      'https://images.unsplash.com/photo-1592840496694-26d035b52b48',
  },
]

function Products() {
  return (
    <section className="products" id="productos">
      <div className="container">

        <h2 className="section-title">
          Productos Destacados
        </h2>

        <div className="products-grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Products