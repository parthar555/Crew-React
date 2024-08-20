import React, { useState } from "react";

const HOC = (OriginalComponent) => {
    const NewCompnent = () => {
        const [money, setMoney] = useState(10);
        const increaseMoney = () => {
            setMoney(money * 2);
        }
        return <OriginalComponent money={money} increaseMoney={increaseMoney} />
    }
    return NewCompnent;
}

export default HOC;
