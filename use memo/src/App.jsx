import { useMemo, useState } from "react";
import "./App.css";

const products = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Phone", price: 500 },
  { id: 3, name: "Keyboard", price: 100 },
  { id: 4, name: "Mouse", price: 50 },
  { id: 5, name: "Monitor", price: 300 }
];

function App() {
  const [search, setSearch] = useState("");
  const [count, setCount] = useState(0);

  const filteredProducts = useMemo(() => {
    console.log("Filtering products...");

    return products.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <>
      <input
        value={search}
        placeholder="Enter Your Search"
        onChange={(e) => setSearch(e.target.value)}
      />

      <div>Count: {count}</div>

      <button onClick={() => setCount(count + 1)}>
        +
      </button>

      <div>Following the Search details</div>

      <div>
        {filteredProducts.map((product) => (
          <p key={product.id}>
            {product.name} - ${product.price}
          </p>
        ))}
      </div>
    </>
  );
}

export default App;