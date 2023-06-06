import { useRoutes } from "react-router-dom";
import EmailLogin from "./pages/authentication/EmailLogin";

const Router = () => {
  const routes = useRoutes([
    {
      path: "login",
      element: <EmailLogin />,
    },
  ]);
  return routes;
};

export default Router;
