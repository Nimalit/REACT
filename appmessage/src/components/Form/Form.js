import { useState } from "react";
import './Form.style.css';

export const Form = ({onSubmit}) => {
    const [value, setValue] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(value);
        setValue('');
    };

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <form className="Forms" onSubmit={handleSubmit}>
            <input value={value} onChange={handleChange} type="text"
             className="Windows" />
            <input className="btnSub" type="submit" />
        </form>
    )
}