import Home from "../pages/Home";
import Menu from "../pages/Menu";
import MenuDetail from "../pages/MenuDetail";
import Login from "../pages/Login";
import ProtectedRoutes from "./ProtectedRoutes";

const routeList = [
  { path: "/", 
  element: <Home /> 
},
  { path: "/menu", 
  element: (
    <ProtectedRoutes>
      <Menu /> 
      </ProtectedRoutes>
  ),
  },
  { path: "/menu/:id",
   element: (
<ProtectedRoutes>
<MenuDetail /> 
</ProtectedRoutes>
   ),
},
  { path: "/login", element: <Login /> },
];

export default routeList;
