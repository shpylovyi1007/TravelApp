import Header from "../Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import Catalog from "../../pages/Catalog";
import NotFound from "../../pages/NotFound";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import Camper from "../../pages/Camper";
import FeaturesCamper from "../FeaturesCamper/FeaturesCamper";
import ReviewsCamper from "../ReviewsCamper/ReviewsCamper";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/catalog/:id" element={<Camper />}>
            <Route index element={<FeaturesCamper />} />
            <Route path="features" element={<FeaturesCamper />} />
            <Route path="reviews" element={<ReviewsCamper />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
