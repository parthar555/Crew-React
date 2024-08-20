import React from "react";
import { useParams } from "react-router-dom";

const UserDetails = (props) => {
    const params = useParams();
    console.log('paramsparams', params)
    return (
        <div>User Details {params.id}</div>
    )
}

export default UserDetails;
