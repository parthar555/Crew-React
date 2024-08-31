import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {toggleShow, fetchTodoList} from '../slice/todoSlices';
import { AgGridReact } from 'ag-grid-react';
import "ag-grid-community/styles/ag-grid.css";

const Contact = (props) => {
    const dispatch = useDispatch();
    const todoState = useSelector(state => state.todos);
    const [colDefs, setColDefs] = useState([]);

    const {
        contactContent
    } = props;

    const toggles = () => {
        dispatch(toggleShow(true))
    }

    useEffect(() => {
        console.log('ffff')
    }, [])
     
   useEffect(() => {
    if (todoState.todoList && todoState.todoList.length > 0) {
        const heaerObjArr = [];
        for(let data in todoState.todoList[0]) {
            data === 'completed' ? heaerObjArr.push({field: data, headerName: data, cellRenderer: CustomButtonComponent}) : heaerObjArr.push({field: data, headerName: data})
        }
        setColDefs(heaerObjArr);
    }
   }, [todoState.todoList])

   const CustomButtonComponent = (props) => {
    return props.displayName === 'completed' ?
        <input type="checkbox"></input>:
        props.displayName;
   };

   const defaultColDef = {
        flex: 1,
        headerComponent: CustomButtonComponent
   };
   
   

    return (
        <>
        <div>{contactContent}</div>
        <button onClick={() => toggles()}>Toggle</button>
        <button onClick={() => dispatch(fetchTodoList())}>Fetch Todos</button>

        {todoState.todoList.length > 0 && <div
        className={
            "ag-theme-quartz"
        }
            style={{ height: 500 }}
            >
            <AgGridReact
                rowData={todoState.todoList}
                columnDefs={colDefs}
                defaultColDef={defaultColDef}
            />
        </div>}
        </>
    )
}

export default Contact;