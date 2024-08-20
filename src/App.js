import { Routes, Route, Navigate, Link, Router } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import Contact from "./Components/Contact";
import UserDetails from "./Components/UserDetails";
import PrivateRoutes from './utils/PrivateRoutes'

function App() {
  return (
    <>
      <div>
        <Link to="/">Home</Link>&nbsp; &nbsp;
        <Link to="/dashboard">Dashboard</Link>&nbsp;&nbsp;
        <Link to="/contact">Contact</Link>&nbsp;&nbsp;
        <Link to="/user-details/12">User Details</Link>
      </div>
      <Routes>
          <Route
            path='/dashboard'
            element={<Dashboard />}
            exact
          ></Route>
          <Route
            path=""
            element={<Navigate to={'/dashboard'} replace={true} />}
          ></Route>
          <Route
            path="/contact"
            element={<Contact contactContent={'I am contact page'} />}
          >
          </Route>
          <Route element={<PrivateRoutes />}>
            <Route
              path="/user-details/:id"
              element={<UserDetails/>}
              exact
            ></Route>
          </Route>
      </Routes>
    </>
  );
}

export default App;
