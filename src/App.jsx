import { NavBar } from "./components/layout/Navbar";
import ItemListConteiner from "./components/pages/ItemListConteiner/ItemListConteiner";

let greeting = "Welcome to this new experience";

function App() {
  return (
    <div>
      <NavBar />
      <ItemListConteiner greeting={greeting} />
    </div>
  );
}

export default App;
