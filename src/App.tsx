import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { BlankText } from "./components/BlankText";
import { Home } from "./routes/Home";


function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}>
          <Route index element={<BlankText text="Bem vindo!"/>} />
        </Route>

        
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
