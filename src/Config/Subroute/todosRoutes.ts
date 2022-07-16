import { lazy } from "react";

export const TodosRoutes = [
  {
    path: '/todo',
    exact: true,
    component: lazy(() => import('../../Presentation/Todo/TodoViewList')),
  },
  {
    path: '/todo/:id',
    exact: true,
    component: lazy(() => import('../../Presentation/Todo/TodoViewDetail')),
  },
]