import { useEffect, useState } from "react";
import searchAlbumsAPI from "../services/searchAlbumsAPI";
import Loading from "../components/Loading";
import AlbumCard from "../components/AlbumCard";
import Header from "../components/Header";

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
            <Header />
            <h1>search</h1>
            { loading && <Loading /> }
            { !loading && (
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
            ) }
            {Boolean(albums.length) && (
                <div>
                    <h2>{`Results of: ${artist}`}</h2>
                    { albums.map((item, index) => {
                        const {
                            artistName,
                            collectionName,
                            artworkUrl100,
                            collectionId
                        } = item
                        return (
                            <AlbumCard 
                                key={ artistName + index }
                                artistName={ artistName }
                                albumName={ collectionName }
                                albumImage={ artworkUrl100 }
                                albumId={ collectionId }
                            />
                        )
                    }) }
                </div>
            )}
            
        </div>
    )
}

export default Search; 