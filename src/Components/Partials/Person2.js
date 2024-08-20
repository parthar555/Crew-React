import React from "react";
import HOC from "../HOC/HOC";

const Person2 = (props) => {
    const {
        money,
        increaseMoney
    } = props
    return (
        <>
            <p>Donate ${money}</p>
            <button onClick={() => increaseMoney()}>Increase Person 2</button>
        </>
    )
}

export default HOC(Person2);
