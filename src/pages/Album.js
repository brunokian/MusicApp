import { useEffect, useState } from "react";
import getMusics from "../services/musicsAPI";

function Album(props) {
    const [loading, setLoading] = useState(true)
    const [artistName, setArtistName] = useState('')
    const [albumImage, setAlbumImage] = useState('')
    const [albumName, setAmbumName] = useState('')
    const [genre, setGenre] = useState('')
    const [songList, setSongList] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const id = props.match.params.id
            const songs = await getMusics(id)
            // console.log(songs[0].artistName);
            setArtistName(songs[0].artistName)
            setAlbumImage(songs[0].aetworkUrl100)
            setAmbumName(songs[0].collectionName)
            setGenre(songs[0].primaryGenreName)
            setSongList([...songs])
        }
        fetchData()

    }, [])

    // useEffect(() => {
    //     console.log(songList);
    // }, [songList])

    // o objeto retornado pelo método "getMusics()" tem como seu primeiro valor um objeto com informações sobre o album, enquanto os subsequentes são objetos com informações sobre as musicas do album

    return (
        <div>
            <h1>{props.match.params.id}</h1>
        </div>
    )
}

export default Album;
