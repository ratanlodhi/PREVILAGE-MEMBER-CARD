import { lazy } from "react";

export const HIDE_NAVBAR_ROUTES = new Set(["/", "/otp"]);

const ROUTES = [
  {
    path: "/",
    element: lazy(() => import("../components/LoginForm")),
  },
  {
    path: "/otp",
    element: lazy(() => import("../components/OTPScreen")),
  },
  {
    path: "/dashboard",
    element: lazy(() => import("../components/Dashboard")),
  },
  {
    path: "/admin-dashboard",
    element: lazy(() => import("../components/Admin-Dashboard")),
  },
  {
    path: "/profile",
    element: lazy(() => import("../components/ProfilePage")),
  },
  {
    path: "/update-profile",
    element: lazy(() => import("../components/UpdateForm")),
  },
];

export default ROUTES;
