import './message.style.css';
import { useState } from 'react';

export const Message = ({ name, age }) => {

    const [yourName, setName] = useState('')
    const [yourAge, setAge] = useState('')

    const handleChangeName = (event) => {
        setName(event.target.value)
    }
    const handleChangeAge = (event) => {
        setAge(event.target.value)
    }
    return (
        <>
            <div className="Basic">
                <h1 className="headerBasic">Добро пожаловать мой первый Message</h1>
                <p className="dataInput">Укажите ваше имя: {yourName}</p>
                <input type="text" className="Field" onChange={handleChangeName} />
                <p className="dataInput">Мой возвраст: {yourAge} </p>
                <input type="text" className="Field" onChange={handleChangeAge} />
                <h3 className="message"> Меня зовут, {name},возвраст {age}
                </h3>
            </div>
        </>
    );
}; 