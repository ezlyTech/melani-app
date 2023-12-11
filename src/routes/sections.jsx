import {
  lazy,
  Suspense,
} from "react";
import {
  Outlet,
  Navigate,
  useRoutes
} from "react-router-dom";

import DashboardLayout from "src/layouts/dashboard";

export const LoginPage = lazy(() => import("src/pages/LoginPage"));
export const LoginGuestPage = lazy(() => import("src/pages/LoginGuestPage"));
export const HomePage = lazy(() => import("src/pages/HomePage"));
export const ProductListPage = lazy(() => import("src/pages/ProductListPage"));
export const ProductDetailPage = lazy(() => import("src/pages/ProductDetailPage"));
export const Page404 = lazy(() => import("src/pages/page-not-found"));

export default function Router() {
  const routes = useRoutes([
    {
      element: <LoginPage />,
      index: true,
    },
    {
      path: "login-guest",
      element: <LoginGuestPage />,
    },
    {
      element: (
        <DashboardLayout>
          <Suspense>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      ),
      children: [
        { path: "home", element: <HomePage /> },
        { path: "product-list/:categoryName/:categoryID", element: <ProductListPage /> },
        { path: "product-detail/:productID", element: <ProductDetailPage /> },
      ],
    },
    {
      path: "404",
      element: <Page404 />,
    },
    {
      path: "*",
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
