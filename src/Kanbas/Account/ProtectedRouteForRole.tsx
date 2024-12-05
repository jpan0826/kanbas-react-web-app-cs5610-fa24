import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
export default function ProtectedRouteForRole({ allowedRole, redirectLink, children }: {
  allowedRole: string,
  redirectLink: string,
  children: any
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  if (currentUser.role === allowedRole) {
    return children;
  } else {
    return <Navigate to={redirectLink} />;
  }
}

