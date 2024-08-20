import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = () => {
    let authToken = false;

    return(
        authToken ? <Outlet /> : <Navigate to="/dashboard" />
    )
}

export default PrivateRoutes;