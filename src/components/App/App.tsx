import Header from "../Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import Catalog from "../../pages/Catalog";
import Product from "../../pages/Product";
import NotFound from "../../pages/NotFound";
// import css from "./App.module.scss";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/catalog/:id" element={<Product />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
