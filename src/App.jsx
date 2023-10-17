import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/layout/Navbar";
import ItemDetailConteiner from "./components/pages/ItemDetailConteiner/ItemDetailConteiner";
import ItemListConteiner from "./components/pages/ItemListConteiner/ItemListConteiner";
import Card from "./components/pages/card/Card";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<NavBar />}>
          <Route path="/" element={<ItemListConteiner />} />
          <Route
            path="/category/:categorySection"
            element={<ItemListConteiner />}
          />
          <Route path="/card" element={<Card />} />
          <Route path="/itemDetail/:id" element={<ItemDetailConteiner />} />
        </Route>
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
