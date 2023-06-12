import { useEffect, useState } from "react";
import { reqFindOne } from "../services/requests";
import MusicaCard from "../components/MusicCard";

function Favorites() {
    const [favoriteList, setFavoriteList] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const loginInfo = JSON.parse(localStorage.getItem('account'))
            const list = await reqFindOne(loginInfo.email)
            const newObj = list.map((obj) => {
                return {
                    ['trackName']: obj.title,
                    ['previewUrl']: obj.url 
                }
            })
            console.log(newObj);
            setFavoriteList(newObj)
        }
        fetchData()
    }, [])

    return (
        <div>
            <h1>favorites</h1>
            {favoriteList.map((song, index) => {
                return (
                    <div>

                        <MusicaCard 
                            key={ song.id }
                            songInfo={ song }

                        />

                    </div>
                )
            })}
        </div>
    )
}

export default Favorites;
