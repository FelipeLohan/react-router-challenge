import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BlankText } from "./components/BlankText";
import { Home } from "./routes/Home";
import { Products } from "./routes/Home/Products";
import { SelectedProduct } from "./routes/Home/Products/SelectedProduct";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
          <Route path="*" element={<BlankText text="Nenhuma página encontrada"/>}/>
            <Route index element={<BlankText text="Bem vindo!" />} />
            <Route path="about" element={<BlankText text="Sobre nós" />} />
            <Route path="products" element={<Products />}>
              <Route
                path="computers"
                element={<SelectedProduct category="computers" />}
              />
              <Route
                path="electronics"
                element={<SelectedProduct category="electronics" />}
              />
              <Route
                path="books"
                element={<SelectedProduct category="books" />}
              />
            </Route>
          </Route>
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
