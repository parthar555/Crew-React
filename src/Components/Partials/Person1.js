import React from "react";
import HOC from "../HOC/HOC";

const Person1 = (props) => {
    const {
        money,
        increaseMoney
    } = props
    return (
        <>
            <p>Donate ${money}</p>
            <button onClick={() => increaseMoney()}>Increase Person 1</button>
        </>
    )
}

export default HOC(Person1);
