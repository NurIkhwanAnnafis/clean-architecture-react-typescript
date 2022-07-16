import React, { Suspense } from "react";
import { Route, Routes as Switch } from "react-router-dom";
import { menuRoutes } from "./Config/routes";

interface IMenuRoutes {
  path: string;
  exact: boolean;
  component: React.ComponentType<any>;
}

const Routes:React.FC = () => {
  return (
    <Switch>
      {menuRoutes.map((detail: IMenuRoutes) => (
        <Route 
          key={detail.path}
          path={detail.path}
          element={
            <Suspense fallback={null}>
              <detail.component />
            </Suspense>
          }
        />
      ))}
    </Switch>
  )
}

export default Routes;