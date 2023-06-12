import { useEffect, useState, useRef } from "react";
import { reqAddFavorite, reqDeleteFavorite, reqFindOne } from "../services/requests";

function MusicaCard(props) {

    const [favorite, setFavorite] = useState(false)
    const [email, setEmail] = useState('')
    const [favoriteList, setFavoriteList] = useState([])

    const audioRef = useRef(null);

    useEffect(() => {
        const loginInfo = JSON.parse(localStorage.getItem('account'))
        
        const fetchData = async () => {
            const list = await reqFindOne(loginInfo.email)
            setFavoriteList(list)
            if (list.includes(props.songInfo.trackName)) {
                setFavorite(true)
            }
        }
        fetchData()
        
        setEmail(loginInfo.email)
        if (audioRef.current) {
            audioRef.current.volume = 0.2; // Definir o volume como 20%
        }
    }, []);

    const handleClickFavorite = async () => {
        setFavorite(!favorite)
        if (!favorite) {
            const a = await reqAddFavorite(email, {
                title: props.songInfo.trackName,
                url: props.songInfo.previewUrl
            })
            console.log(typeof props.songInfo.previewUrl);
        } else {
            const b = await reqDeleteFavorite(email, {
                title: props.songInfo.trackName,
                url: props.songInfo.previewUrl
            })
            console.log(b);
        }
    }

    return (
        <div>
            <h2>{props.songInfo.trackName}</h2>
            <audio
                key={props.songInfo.trackName}
                data-testid="audio-component"
                src={props.songInfo.previewUrl}
                ref={audioRef} // passamos a apontar o <audio> como referencia ao "audioRef"
                controls
            >
                Browser doesn't support audio the element<code>audio</code>.
            </audio>
            <button className='favorite-button' onClick={handleClickFavorite}>
                <span className={favorite ? 'heart-filled' : 'heart-not-filled'}></span>
            </button>
        </div>
    )
}

export default MusicaCard;
