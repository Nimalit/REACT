import { useDispatch, useSelector } from "react-redux";
import { setName, SET_NAME, toggleCheckbox } from "../../store/profile/actions.js";
import * as React from 'react';
import { Checkbox } from '@mui/material/Checkbox';
import { Form } from "../../components/Form/Form";
import { selectName, selectShowName } from "../../store/profile/selectors.js";



export const Profile = () => {
    const dispatch = useDispatch();
    const name = useSelector(selectName);
    const showName = useSelector(selectShowName);
    // console.log(state);
    const handleClick = () => {
        dispatch(toggleCheckbox);
    };

    const handleSubmit = (text) => {
        dispatch(setName(text));
    };


    return (
        <>
            <h3>Твой профиль</h3>
            {showName &&
                <span>{name}</span>}
            <button onClick={handleClick}>Изменить имя</button>
            <Form onSubmit={handleSubmit} />
        </>
    );
};