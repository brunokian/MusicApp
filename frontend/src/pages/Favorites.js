import { useEffect, useState } from "react";
import { reqFindOne } from "../services/requests";
import MusicaCard from "../components/MusicCard";

function Favorites() {
    const [favoriteList, setFavoriteList] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const loginInfo = JSON.parse(localStorage.getItem('account'))
            const list = await reqFindOne(loginInfo.email)
            setFavoriteList(list)
        }
        fetchData()
    }, [])

    return (
        <div>
            <h1>favorites</h1>

        </div>
    )
}

export default Favorites;
