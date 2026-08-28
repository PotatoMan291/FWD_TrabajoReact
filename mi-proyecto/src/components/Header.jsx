function Header() {
  return (
    <header className="header">
      <div className="container header-content">
        <div className="logo-area">
          <span className="menu-text">menu</span>
          <h2 className="logo">TechStore</h2>
        </div>

        <nav className="nav">
          <a href="#inicio" className="active">
            Inicio
          </a>
          <a href="#productos">Productos</a>
          <a href="#categorias">Categorías</a>
          <a href="#contacto">Contacto</a>
        </nav>

        <button className="cart-button">
          🛒
          <span className="cart-count">3</span>
        </button>
      </div>
    </header>
  )
}

export default Header