import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Paquetes } from "./pages/Paquetes";
import { QuienesSomos } from "./pages/QuienesSomos";
import { Contacto } from "./pages/Contacto";
import { Reservas } from "./pages/Reservas";
import { Galeria } from "./pages/Galeria";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "paquetes", Component: Paquetes },
      { path: "quienes-somos", Component: QuienesSomos },
      { path: "galeria", Component: Galeria },
      { path: "contacto", Component: Contacto },
      { path: "reservas", Component: Reservas },
      { path: "reservas/:packageId", Component: Reservas },
    ],
  },
]);
