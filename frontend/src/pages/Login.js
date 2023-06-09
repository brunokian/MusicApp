import { useContext, useEffect, useState } from "react";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { checkLogin, reqCreateAccount, reqCreateFavoriteList, requestData } from "../services/requests";
import Context from "../context/Context";

function Login(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')

    const [logged, setLogged] = useState(false);
    const [loginFail, setLoginFail] = useState(false)

    const [toCreate, setToCreate] = useState(false)
    const [createFail, setCreateFail] = useState(false)

    const {setLoginEmail} = useContext(Context)

    const handleClick = async (target) => {
        const postLogin = await checkLogin(email, password)
        // const test = await requestData('/login')
        // console.log(test);
        console.log(postLogin.message);
        if (postLogin.message) {
            const accountInfo = {
                email: postLogin.message.email,
                username: postLogin.message.name
            }
            setLoginEmail(email)
            localStorage.setItem('account', JSON.stringify(accountInfo))
            setLoginFail(false)
            setLogged(true)
        } else {
            setLoginFail(true)
        }
    }

    const createAccount = async () => {
        const postLogin = await reqCreateAccount(email, password, username)

        if (postLogin.message) {
            const favoriteLogin = await reqCreateFavoriteList(email)
            setToCreate(false)
            setCreateFail(false)
            console.log(favoriteLogin);
        } else {
            setCreateFail(true)
        }
        const test = await requestData('/login')
        console.log(postLogin);
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
    }, []) // imprimindo a lista com as contas cadatradas, apenas para saber

    const handleToCreate = () => {
        if (toCreate) {
            setToCreate(false)
        } else {
            setToCreate(true)
        }
    }

    return (
        <div>
            <h1>login</h1>
            <button
                type="button"
                onClick={handleToCreate}
            >
                {toCreate ? <p>Login</p> : <p>Create Account</p>}
            </button>
            { !toCreate && <form>
                <input
                    placeholder="Email"
                    type="text"
                    name="loginInput"
                    value={email}
                    onChange={({ target: { value } }) => setEmail(value)}
                // trata-se de uma desconstrução aninhada do "event.target.value"
                />
                <input
                    placeholder="Password"
                    type="text"
                    name="passwordInput"
                    value={password}
                    onChange={({ target: { value } }) => setPassword(value)}
                // trata-se de uma desconstrução aninhada do "event.target.value"
                />
                <button
                    type="button"
                    onClick={handleClick}
                >
                    Enter
                </button>
            </form>}
            
            { toCreate &&   <form>
                <input
                    placeholder="Email"
                    type="text"
                    name="loginInput"
                    value={email}
                    onChange={({ target: { value } }) => setEmail(value)}
                />
                <input
                    placeholder="Password"
                    type="text"
                    name="passwordInput"
                    value={password}
                    onChange={({ target: { value } }) => setPassword(value)}
                />
                <input
                    placeholder="Username"
                    type="text"
                    name="usernameInput"
                    value={username}
                    onChange={({ target: { value } }) => setUsername(value)}
                />
                <button
                    type="button"
                    onClick={createAccount}
                >
                    Create Account
                </button>
            </form>}

          

            {loginFail && <p>email or password incorrect</p>}
            {createFail && <p>email aready exist</p>}
            {logged && <Redirect to='/search' />}
        </div>
    )
}

export default Login;