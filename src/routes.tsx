import { Suspense, lazy } from "react";
import type { RouteObject } from "react-router";

const Loadable = (Component: any) => (props: JSX.IntrinsicAttributes) =>
  (
    <Suspense fallback={<h1>Loading</h1>}>
      {/* Fix this fallback */}
      <Component {...props} />
    </Suspense>
  );

const Home = Loadable(lazy(() => import("./Home")));
const Details = Loadable(lazy(() => import("./Details")));
const NotFound = Loadable(lazy(() => import("./NotFound")));

const routes: RouteObject[] = [
  {
    path: "/",
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: ":id",
        element: <Details />,
      },
    ],
  },
  { path: "*", element: <NotFound /> },
];

export default routes;
