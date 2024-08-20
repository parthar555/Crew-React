import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Person1 from "./Partials/Person1";
import Person2 from "./Partials/Person2";

const Dashboard = (props) => {
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        searchParams.set('page', 'Dash')
        setSearchParams(searchParams)
    }, [])

    return (
        <>
            <div><hi>I am Dashboard Page</hi></div>
            <Person1/>
            <Person2/>
        </>
    )
}

export default Dashboard;