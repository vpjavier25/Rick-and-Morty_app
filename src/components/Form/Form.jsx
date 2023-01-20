import { useState } from "react";
import validation from "./Validation";

export default function Form(props) {

    const [userData, setUserData] = useState({ username: '', password: '' });

    const [errors, setErrors] = useState({ username: '', password: '' })

    const handleOnchange = (event) => {
        setUserData(
            { ...userData, [event.target.name]: event.target.value }
        );

        setErrors(validation({ ...userData, [event.target.name]: event.target.value }))

    }

    const handleSubmit = (evento) =>{
        props.login(userData)
    }  

    


    


    return (
        <form onSubmit={handleSubmit}>
            <div>
                <div>
                    <label>Username:</label>
                    <input name='username' type="text" onChange={handleOnchange} value={userData.username} placeholder='username@example.com' />
                    <span>{errors.username ? 'Ingrese un Email valido.' : ''}</span>
                </div>

                <div>
                    <label>Password:</label>
                    <input name='password' type="text" onChange={handleOnchange} value={userData.password} />
                    <span>{errors.password ? 'Su contraseña debe tener entre 7 y 14 caracteres' : ''}</span>
                </div>


                <button type='submit'>Enviar</button>

            </div>
        </form>

    )
}