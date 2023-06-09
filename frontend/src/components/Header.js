import { useEffect, useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Header() {
    const [account, setAccount] = useState('')

    useEffect (() => {
        const accountInfoString = localStorage.getItem('account')
        const accountInfo = JSON.parse(accountInfoString)
        
        setAccount(accountInfo)

    }, [])

    return (
        <div>
            <h1>header</h1>
            <nav>
                <Link to='/search'>search</Link>
                <Link to={`/favorites/${account.email}`}>favorites</Link>
                <p>{account.username}</p>
                <Link to='/'>logout</Link>
            </nav>
        </div>
    )
}

export default Header;
