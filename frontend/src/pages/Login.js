import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

function Login(props) {
    const [user, setUser] = useState('');
    const [logged, setLogged] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleClick = async (target) => {
        setLoading(true)
        setTimeout(() => {
            setLogged(true)
        }, 1000)
    }

    return (
        <div>
            <h1>login</h1>
            {!logged && !loading && (
                <form>
                    <input
                        placeholder="Username"
                        type="text"
                        name="loginInput"
                        value={user}
                        onChange={ ({target: {value}}) => setUser(value) }
                        // trata-se de uma desconstrução aninhada do "event.target.value"
                    />
                    <button
                        type="button"
                        onClick={handleClick}
                    >
                        Enter
                    </button>
                </form>
            )}
            { loading && <Loading /> }
            { logged && <Redirect to='/search' /> }
        </div>
    )
}

export default Login;