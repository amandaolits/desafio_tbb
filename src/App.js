import "./App.css";
import { useState, useEffect } from "react";
import db from "./database/productsCategory.json";
import ProductsList from "./components/productsList";
import logo from "./utils/logo.png";
import { BiSearch } from "react-icons/bi";
import banner from "./utils/banner.jpg"

function App() {
  const [products, setProducts] = useState(db.data.nodes);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setProducts(db.data.nodes);
  }, []);

  const showProduct = (event, search) => {
    event.preventDefault();
    const newList = products.filter((product) => {
      if (
        product.name.toLowerCase() === search.toLowerCase() ||
        product.category.name.toLowerCase() === search.toLowerCase()
      ) {
        return product;
      } else {
        return null;
      }
    });
    setFilteredProducts(newList);
  };

  const showAll = (event) => {
    event.preventDefault();
    const filteredAll = products.filter((product) => {
      if (
        product.category.name === "Aerosol" ||
        "Alcohol en Gel" ||
        "Barra" ||
        "Jabón Líquido" ||
        "Jabón Barra" ||
        "Alcohol en Spray" ||
        "Alcohol en Aerosol" ||
        "Talco"
      ) {
        return product;
      } else {
        return null;
      }
    });
    setFilteredProducts(filteredAll);
  };

  const showAerosol = (event) => {
    event.preventDefault();
    const filteredAerosol = products.filter((product) => {
      if (product.category.name === "Aerosol") {
        return product;
      } else {
        return null;
      }
    });
    setFilteredProducts(filteredAerosol);
  };

  const showAlcoholGel = (event) => {
    event.preventDefault();
    const filteredAlcoholGel = products.filter((product) => {
      if (product.category.name === "Alcohol en Gel") {
        return product;
      } else {
        return null;
      }
    });
    setFilteredProducts(filteredAlcoholGel);
  };

  const showBarra = (event) => {
    event.preventDefault();
    const filteredBarra = products.filter((product) => {
      if (product.category.name === "Barra") {
        return product;
      } else {
        return null;
      }
    });
    setFilteredProducts(filteredBarra);
  };

  const showJabonLiquido = (event) => {
    event.preventDefault();
    const filteredJabonLiquido = products.filter((product) => {
      if (product.category.name === "Jabón Líquido") {
        return product;
      } else {
        return null;
      }
    });
    setFilteredProducts(filteredJabonLiquido);
  };

  const showJabonBarra = (event) => {
    event.preventDefault();
    const filteredJabonBarra = products.filter((product) => {
      if (product.category.name === "Jabón Barra") {
        return product;
      } else {
        return null;
      }
    });
    setFilteredProducts(filteredJabonBarra);
  };

  const showAlcoholSpray = (event) => {
    event.preventDefault();
    const filteredAlcoholSpray = products.filter((product) => {
      if (product.category.name === "Alcohol en Spray") {
        return product;
      } else {
        return null;
      }
    });
    setFilteredProducts(filteredAlcoholSpray);
  };

  const showAlcoholAerosol = (event) => {
    event.preventDefault();
    const filteredAlcoholAerosol = products.filter((product) => {
      if (product.category.name === "Alcohol en Aerosol") {
        return product;
      } else {
        return null;
      }
    });
    setFilteredProducts(filteredAlcoholAerosol);
  };

  const showTalco = (event) => {
    event.preventDefault();
    const filteredTalco = products.filter((product) => {
      if (product.category.name === "Talco") {
        return product;
      } else {
        return null;
      }
    });
    setFilteredProducts(filteredTalco);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img id="logo" src={logo} alt="logo Rexona" />
        <form className="search-products">
          <input
            placeholder="Pesquise aqui"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
          <button onClick={(event) => showProduct(event, search)}>
            <BiSearch size={30} />
          </button>
        </form>
      </header>
      <img id="banner" src={banner} alt="banner"/>;
      <div className="containerCategory">
        <button id="category" onClick={(event) => showAll(event)}>
          Todos
        </button>
        <button id="category" onClick={(event) => showAerosol(event)}>
          Aerosol
        </button>
        <button id="category" onClick={(event) => showAlcoholGel(event)}>
          Alcohol en Gel
        </button>
        <button id="category" onClick={(event) => showBarra(event)}>
          Barra
        </button>
        <button id="category" onClick={(event) => showJabonLiquido(event)}>
          Jabón Líquido
        </button>
        <button id="category" onClick={(event) => showJabonBarra(event)}>
          Jabón Barra
        </button>
        <button id="category" onClick={(event) => showAlcoholSpray(event)}>
          Alcohol en Spray
        </button>
        <button id="category" onClick={(event) => showAlcoholAerosol(event)}>
          Alcohol en Aerosol
        </button>
        <button id="category" onClick={(event) => showTalco(event)}>
          Talco
        </button>
      </div>

      <main>
        <ProductsList products={products} filteredProducts={filteredProducts} />
      </main>
    </div>
  );
}

export default App;
