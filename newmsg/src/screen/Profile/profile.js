import { useDispatch, useSelector } from "react-redux";
import { toggleCheckbox } from "../../store/profile/actions.js";
import * as React from 'react';
import { Checkbox } from '@mui/material/Checkbox';



export const Profile = () => {
    const dispatch = useDispatch();
    const state = useSelector((state) => state);
    console.log(state);
    const handleClick = () => {
        dispatch(toggleCheckbox);
    };

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    return (
        <>
            <h3>Твой профиль</h3>
            {state.showName &&
                <span>{state.name}</span>}
            <button onClick={handleClick}>Изменить имя</button>
        </>
    );
};