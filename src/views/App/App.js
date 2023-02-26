import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainTemplate from "../../components/MainTemplate/MainTemplate";
import Home from '../Home/Home'
import Info from '../Info/Info'
import CocktailDetail from '../CocktailDetail/CocktailDetail'
import RandomCocktail from '../RandomCocktail/RandomCocktail';

function App() {

  const nav = [
    { url: "/", text: "Home" },
    // { url: "/info", text: "Info" },
    { url: "/random", text: "Inspire Me" }
  ];

  return (
    <BrowserRouter>
      <MainTemplate
        navItems={nav}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/info" element={<Info />} /> */}
          <Route path="/random" element={<RandomCocktail />} />
          <Route path="/cocktails/:id" element={<CocktailDetail />} />
        </Routes>
      </MainTemplate>
    </BrowserRouter>
  );
}

export default App
