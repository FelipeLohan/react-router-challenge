import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BlankText } from "./components/BlankText";
import { Home } from "./routes/Home";
import { CategoryNavBar } from "./components/CategoryNavBar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<BlankText text="Bem vindo!" />} />
            <Route path="products" element={<CategoryNavBar />} />
            <Route path="about" element={<BlankText text="Sobre nós" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
