import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { checkLogin, requestData } from "../services/requests";

function Login(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [logged, setLogged] = useState(false);
    const [loading, setLoading] = useState(false);
    const [loginFail, setLoginFail] = useState(false)

    const handleClick = async (target) => {
        const postLogin = await checkLogin(email, password)
        console.log(postLogin);
        const test = await requestData('/login')
        console.log(test);
        if (postLogin.message) {
            setLoading(true)
            setTimeout(() => {
                setLogged(true)
            }, 1000)
        } else {
            setLoginFail(true)
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const responseData = await requestData('/login')
                console.log(responseData);
            } catch (err) {
                console.log(err);
            }
        }
        fetchData()
    }, [])

    return (
        <div>
            <h1>login</h1>
            {!logged && !loading && (
                <form>
                    <input
                        placeholder="Email"
                        type="text"
                        name="loginInput"
                        value={email}
                        onChange={ ({target: {value}}) => setEmail(value) }
                        // trata-se de uma desconstrução aninhada do "event.target.value"
                    />
                    <input
                        placeholder="Password"
                        type="text"
                        name="passwordInput"
                        value={password}
                        onChange={ ({target: {value}}) => setPassword(value) }
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
            { loginFail && <p>email or password incorrect</p> }
            { loading && <Loading /> }
            { logged && <Redirect to='/search' /> }
        </div>
    )
}

export default Login;