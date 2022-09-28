import React, { createContext, useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Menu from "./pages/Menu";
import Search from "./pages/Search";
import ErrorPage from "./pages/error/ErrorPage";
import NavBar from "./components/NavBar";
// react-quiery
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Form from "./pages/Form";

// context
export const AppContext = createContext();

function App() {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });
  const [username, setUserName] = useState("nanann");
  return (
    <div>
      <AppContext.Provider value={{ username, setUserName }}>
        <QueryClientProvider client={client}>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/search" element={<Search />} />
            <Route path="/form" element={<Form />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </QueryClientProvider>
      </AppContext.Provider>
    </div>
  );
}

export default App;
