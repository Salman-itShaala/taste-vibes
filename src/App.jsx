import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AllRecipes from "./pages/AllRecipes";
import RecipeWithId from "./pages/RecipeWithId";
import Header from "./components/Header";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="all-recipes" element={<AllRecipes />} />
          <Route path="recipe/:id" element={<RecipeWithId />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
