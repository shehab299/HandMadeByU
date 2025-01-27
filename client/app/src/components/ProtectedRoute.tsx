// import { ReactNode, useEffect } from "react";
// import { Navigate, useNavigate } from "react-router";

// // import { useAuthStatus } from "@features/auth/login/hooks/useAuthStatus";

// type prortectedRouteType = {
//   children: ReactNode;
//   allowedRoles: string[];
//   userRole: string;
// };

// function ProtectedRoute({
//   children,
//   allowedRoles,
//   userRole
// }: prortectedRouteType) {
//   const navigate = useNavigate();
//   // const { isAuth, isPending } = useAuthStatus();

//   // useEffect(() => {
//   //   if (!isAuth && !isPending) {
//   //     navigate("/login");
//   //   }
//   // }, [navigate, isAuth, isPending]);

//   // if (isAuth)
//   //   return allowedRoles.includes(userRole) ? (
//   //     children
//   //   ) : (
//   //     <Navigate to="/unauthorized" />
//   //   );
//   // else return null;
// }

// export default ProtectedRoute;
