import "./index.css";

import { Toaster } from "./components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout"; 
import Index from "./pages/Index";
import Lipsticks from "./pages/Lipsticks";
import Skincare from "./pages/Skincare";
import Accessories from "./pages/Accessories";
import About from "./pages/About";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProductDetail from "./pages/ProductDetail";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  return React.createElement(QueryClientProvider, { client: queryClient },
    React.createElement(TooltipProvider, null,
      React.createElement(Toaster),
      React.createElement(Sonner),
      React.createElement(BrowserRouter, null,
        React.createElement(Layout, null,
          React.createElement(Routes, null,
            React.createElement(Route, { path: "/", element: React.createElement(Index) }),
            React.createElement(Route, { path: "/lipsticks", element: React.createElement(Lipsticks) }),
            React.createElement(Route, { path: "/skincare", element: React.createElement(Skincare) }),
            React.createElement(Route, { path: "/accessories", element: React.createElement(Accessories) }),
            React.createElement(Route, { path: "/about", element: React.createElement(About) }),
            React.createElement(Route, { path: "/login", element: React.createElement(Login) }),
            React.createElement(Route, { path: "/signup", element: React.createElement(Signup) }),
            React.createElement(Route, { path: "/product/:id", element: React.createElement(ProductDetail) }),
            React.createElement(Route, { path: "*", element: React.createElement(NotFound) })
          )
        )
      )
    )
  );
};

createRoot(document.getElementById("root")).render(React.createElement(App));


export default App;