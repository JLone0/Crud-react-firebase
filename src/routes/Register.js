import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserProvider"

const Register = () => {

    const [email, setEmail] = useState("primercorreo@primero.com");
    const [password, setPassword] = useState("123456");

    const navigate = useNavigate()

    const { registerUser } = useContext(UserContext);


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('procesando form: ', email, password);
        try {
            await registerUser(email, password);
            console.log('usuario creado');
            navigate("/");
        } catch (error) {
            console.log(error.code);

        }
    };

    return (
        <>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Ingrese Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Ingrese contrasena"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button>Register</button>
            </form>
        </>
    )
}

export default Register;