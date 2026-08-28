import Header from './components/Header'
import Hero from './components/Hero'
import Categories from './components/Categories'
import Products from './components/Products'
import PromoBanner from './components/PromoBanner'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Categories />
        <Products />
        <PromoBanner />
      </main>

      <Footer />
    </>
  )
}

export default App