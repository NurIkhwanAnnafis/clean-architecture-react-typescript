import { lazy } from "react";
import { TodosRoutes } from "./Subroute/todosRoutes";

export const menuRoutes = [
  {
    path: '/',
    exact: true,
    component: lazy(() => import('../Presentation/Main')),
  },
  ...TodosRoutes,
]