import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {toggleShow, fetchTodoList} from '../slice/todoSlices';

const Contact = (props) => {
    const dispatch = useDispatch();
    const todoState = useSelector(state => state.todos)
    console.log(todoState);
    const {
        contactContent
    } = props;

    const toggles = () => {
        dispatch(toggleShow(true))
    }

    return (
        <>
        <div>{contactContent}</div>
        <button onClick={() => toggles()}>Toggle</button>
        <button onClick={() => dispatch(fetchTodoList())}>Fetch Todos</button>
        </>
    )
}

export default Contact;