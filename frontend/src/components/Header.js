import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Header() {
    return (
        <div>
            <h1>header</h1>
            <nav>
                <Link to='/search'>search</Link>
                <Link to='favorites'>favorites</Link>
            </nav>
        </div>
    )
}

export default Header;
