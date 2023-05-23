import { useEffect, useState } from "react";
import searchAlbumsAPI from "../services/searchAlbumsAPI";

function Search() {

    const [artist, setArtist] = useState('')
    const [loading, setLoading] = useState(false)
    const [albums, setAlbums] = useState([])

    const handleClick = async () => {
        setLoading(true)
        const queryAlbums = await searchAlbumsAPI(artist)
        setTimeout(() => {
            setLoading(false)
            setAlbums([...queryAlbums])
        },1000)
    }

    return (
        <div>
            <h1>search</h1>
            <form>
                <input 
                    placeholder="Artist / Band"
                    name="artistInput"
                    type="text"
                    value={artist}
                    onChange={ ({target: {value}}) => setArtist(value)}
                />
                <button
                    type="button"
                    onClick={handleClick}
                >
                    Search
                </button>
            </form>
        </div>
    )
}

export default Search; 