import { useRoutes } from "react-router-dom";
import AllRoutes from "./AllRoutes";

const Routes = () => {
  return useRoutes([AllRoutes]);
};

export default Routes;
