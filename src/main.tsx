import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Aboutpage,
  Contactpage,
  Homepage,
  Productspage
} from "./pages/index.ts";
import ContextProvider from "./contexts/Context.tsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
import { Toaster } from "./components/ui/sonner.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />
  },
  {
    path: "/products",
    element: <Productspage />
  },
  {
    path: "/about",
    element: <Aboutpage />
  },
  {
    path: "/contact",
    element: <Contactpage />
  }
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <ContextProvider>
        <RouterProvider router={router} />
        <Toaster />
      </ContextProvider>
    </Provider>
  </StrictMode>
);
