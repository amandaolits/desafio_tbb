import './App.css';
import { useState, useEffect } from 'react'
import db from "./database/productsCategory.json"
import ProductsList from './components/productsList';
import logo from './utils/logo.png'
import { BiSearch } from "react-icons/bi";

function App() {
  const [products, setProducts] = useState(db.data.nodes);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [search, setSearch] = useState('')

  useEffect(() => {
    setProducts(db.data.nodes);
  }, [])

  const showProduct = (event, search) => {
    event.preventDefault()
    const newList = products.filter(product => {
      if(product.name.toLowerCase() === search.toLowerCase() ||
         product.category.name.toLowerCase() === search.toLowerCase()){
        return product
      } else {
        return null
      }
    })
    setFilteredProducts(newList)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img id='logo' src={logo} alt='logo Rexona'/>
        <form className='search-products'>
          <input placeholder='Pesquise aqui' value={search} onChange={(event) => setSearch(event.target.value)}/>
          <button onClick={(event) => showProduct(event, search)}><BiSearch size={30}/></button>
        </form>
      </header>
      <main>
        <ProductsList products={products} filteredProducts={filteredProducts}/>
      </main>
    </div>
  );
}

export default App;