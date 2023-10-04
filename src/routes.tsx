import { Suspense, lazy } from "react";
import FallBack from "./screens/FallBack";
import type { RouteObject } from "react-router";

const Loadable = (Component: any) => (props: JSX.IntrinsicAttributes) =>
  (
    <Suspense fallback={<FallBack />}>
      <Component {...props} />
    </Suspense>
  );

const Home = Loadable(lazy(() => import("./screens/Home")));
const NotFound = Loadable(lazy(() => import("./screens/NotFound")));
const Compare = Loadable(lazy(() => import("./screens/Compare")));

const routes: RouteObject[] = [
  { path: "/", element: <Home /> },
  { path: "/compare", element: <Compare /> },
  { path: "*", element: <NotFound /> },
];

export default routes;
