const categories = [
  {
    id: 1,
    icon: '💻',
    name: 'Laptops',
  },
  {
    id: 2,
    icon: '📱',
    name: 'Smartphones',
  },
  {
    id: 3,
    icon: '🎧',
    name: 'Accesorios',
  },
  {
    id: 4,
    icon: '🎮',
    name: 'Gaming',
  },
]

function Categories() {
  return (
    <section className="categories" id="categorias">
      <div className="container">

        <h2 className="section-title">Categorías Populares</h2>

        <div className="categories-grid">
          {categories.map((category) => (
            <div className="category-card" key={category.id}>

              <div className="category-icon">
                {category.icon}
              </div>

              <h3>{category.name}</h3>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Categories