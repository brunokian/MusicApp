import { useEffect, useState } from "react";
import getMusics from "../services/musicsAPI";
import MusicaCard from "../components/MusicCard";
import Header from "../components/Header";

function Album(props) {
    const [loading, setLoading] = useState(true)
    const [artistName, setArtistName] = useState('')
    const [albumImage, setAlbumImage] = useState('')
    const [albumName, setAmbumName] = useState('')
    const [genre, setGenre] = useState('')
    const [songList, setSongList] = useState([])
    const [tracks, setTracks] = useState(0)

    useEffect(() => {
        const fetchData = async () => {
            const id = props.match.params.id
            const songs = await getMusics(id)
            // console.log(songs[0].artistName);
            setArtistName(songs[0].artistName)
            setAlbumImage(songs[0].artworkUrl100)
            setAmbumName(songs[0].collectionName)
            setGenre(songs[0].primaryGenreName)
            setSongList([...songs])
            setTracks(songs[0].trackCount)
        }
        fetchData()
    }, [])

    useEffect(() => {
        console.log(songList);
    }, [songList])

    // o objeto retornado pelo método "getMusics()" tem como seu primeiro valor um objeto com informações sobre o album, enquanto os subsequentes são objetos com informações sobre as musicas do album

    return (
        <div>
            <Header />
            <div>
                <img src={albumImage} alt={albumName} />
                <p>{albumName}</p>
                <p>{artistName}</p>
                <p>{`Genre: ${genre}`}</p>
                <p>{`Track: ${tracks}`}</p>
            </div>
            <h3>Albums Songs</h3>
            {songList.map((song, index) => {
                if (!index) { return null }
                return (
                    <div>

                        <MusicaCard 
                            key={ song.artistId }
                            songInfo={ song }

                        />

                    </div>
                )
            })}
        </div>
    )
}

export default Album;
