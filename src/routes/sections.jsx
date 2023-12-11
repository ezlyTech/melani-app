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
export const HomePage = lazy(() => import("src/pages/HomePage"));
export const LoginGuestPage = lazy(() => import("src/pages/LoginGuestPage"));
export const ProductListPage = lazy(() => import("src/pages/ProductListPage"));
export const IndexPage = lazy(() => import("src/pages/app"));
export const BlogPage = lazy(() => import("src/pages/blog"));
export const UserPage = lazy(() => import("src/pages/user"));
export const ProductsPage = lazy(() => import("src/pages/products"));
export const Page404 = lazy(() => import("src/pages/page-not-found"));
export const ReceiptPage = lazy(() => import("src/pages/ReceiptPage"));

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
      path: "receipt-page",
      element: <ReceiptPage />,
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
        { path: "product-list", element: <ProductListPage /> },
        { path: "user", element: <UserPage /> },
        { path: "menu", element: <ProductsPage /> },
        { path: "blog", element: <BlogPage /> },
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
