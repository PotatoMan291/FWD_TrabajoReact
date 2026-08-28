function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="container hero-content">

        <div className="hero-text">
          <h1>Tecnología para todos</h1>

          <p>
            Encuentra los mejores productos tecnológicos al mejor precio.
            Descubre nuestra selección premium diseñada para potenciar tu vida
            digital.
          </p>

          <a href="#productos" className="primary-button">
            Ver productos
          </a>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853"
            alt="Laptop y accesorios tecnológicos"
          />
        </div>

      </div>
    </section>
  )
}

export default Hero