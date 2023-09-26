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

const routes: RouteObject[] = [
  {
    path: "/",
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  { path: "*", element: <NotFound /> },
];

export default routes;
